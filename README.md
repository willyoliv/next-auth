
<h1 align="center">Next Auth</h1>

Projeto realizado durante as aulas do curso **Next.js: autenticação e gerenciamento de Tokens.**


<p align="center">
 <a href="#sobre-o-projeto">Sobre o projeto</a> |
 <a href="#tópicos-abordados">Tópicos abordados</a> |
 <a href="#como-usar">Como usar</a>
</p>

<h4 align="center">
	 Status: Finalizado
</h4>
 
### Sobre o projeto💻

 Este é o repositório para aprendizado de gerenciamento de Tokens de autenticação em uma aplicação web usando NextJs. O projeto contém dois diretórios principais
  sendo um de backend e um de frontend. O foco do curso foi totalmente voltado para o frontend da aplicação. A aplicação contém telas simples de login, uma página static, uma página SSR e uma de logout.
  
 A aplicação permite que o usuário efetue login e seja redicionado para as páginas home static ou ssr, sendo somente acessadas com o usuário devidamente autenticado. O token de autenticação tem praso de 
 duração de 60s, a cada 60s o usuáro será deslogado e seu token de acesso será gerado novamente caso o refresh token esteja válido, permitindo assim que o usuário permanceça acessando as páginas.
 
#### Tópicos abordados
 - Autenticação de usuário via JSON Web Token(JWT)
 - Uso de cookies http only para autenticação do usuário por meio do pacote do Nookies, foram utilizados cookies para envio do token de usuário tanto para o token de acesso quanto para o token de refresh. 
 Foi utilizado o cookie com configuração de httpOnly para garantir que ele não seja guardada no browser.  
 - Formas de se trabalhar com cookies nos ambientes SSR e Static presentes no NextJs

#### Tecnologias🚀

As seguintes ferramentas foram usadas na construção do projeto:

- [X] [Node](https://nodejs.org/pt-br/).
- [X] [React](https://reactjs.org/).
- [X] [Next](https://nextjs.org/).
- [X] [JWT](https://jwt.io/)
- [X] [Nookies](https://www.npmjs.com/package/nookies)
- [X] [Swegger](https://swagger.io/)
___
### Como usar
#### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

##### Clone este repositório
```bash
git clone https://github.com/willyoliv/next-auth.git
```
##### Após clonar, acesse as pastas do projeto no terminal/cmd e instale as dependências, sendo necessário baixar as dependências para o projeto frontend e backend

 - Frontend
```bash
cd next-auth
cd frontend
npm i
```

- Backend
```bash
cd next-auth
cd backend
npm i
```

##### Para executar ambos os projetos acesso suas respectivas pastas e rode o seguinte comando
```bash
yarn dev
```

Obs: A aplicação frontend irá rodar em `http://localhost:3000/` e a backend `http://localhost:4000/` onde por meio do Swegger é possível validar e testar a API.
