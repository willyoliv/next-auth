import nookies from "nookies";
import { tokenService } from "../../src/services/auth/tokenService";

export function HttpClient(fetchUrl, fetchOptions) {
  const options = {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
  };
  return fetch(fetchUrl, options)
    .then(async (response) => {
      return {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        body: await response.json(),
      };
    })
    .then(async (response) => {
      if (!fetchOptions.refresh) return response;
      if (response.status !== 401) return response;

      const isServer = fetchOptions?.ctx ? true : false;
      const currentRefreshToken =
        fetchOptions?.ctx?.req?.cookies["REFRESH_TOKEN_NAME"];

      console.log("currentRefreshToken", currentRefreshToken);

      // Tenta atualizar o token
      const responseRefresh = await HttpClient(
        "http://localhost:3000/api/refresh",
        {
          method: isServer ? "PUT" : "GET",
          body: isServer ? { refresh_token: currentRefreshToken } : undefined,
        }
      );

      console.log("responseRefresh", responseRefresh);
      try {
        const newAccessToken = responseRefresh.body.data.access_token;
        const newRefreshToken = responseRefresh.body.data.refresh_token;

        // Guarda os tokens
        if (isServer) {
          nookies.set(fetchOptions.ctx, "REFRESH_TOKEN_NAME", newRefreshToken, {
            httpOnly: true,
            sameSite: "lax",
            path: "/",
          });
        }

        tokenService.save(newAccessToken);

        const retryResponse = await HttpClient(fetchUrl, {
          ...options,
          refresh: false,
          headers: {
            Authorization: `Bearer ${newAccessToken}`,
          },
        });
        return retryResponse;
      } catch (error) {
        console.log(error);
        return response;
      }
    });
}
