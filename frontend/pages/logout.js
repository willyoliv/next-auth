import React from "react";
import { useRouter } from "next/router";
import { tokenService } from "../src/services/auth/tokenService";
import { HttpClient } from "../infra/HttpClient/HttpClient";

export default function LogoutPage() {
  const router = useRouter();

  React.useEffect(async () => {
    try {
      await HttpClient("/api/refresh", {
        method: "DELETE",
      });
      tokenService.delete();
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return <div>Você será redicionado em instantes...</div>;
}
