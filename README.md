# Auth API com NestJS

Projeto de estudo baseado no vídeo "[API de autenticação com NestJS](https://www.youtube.com/watch?v=K_3b6SlssMc)" criado por Will Dev. O objetivo foi aprender e praticar os fundamentos da autenticação utilizando JWT, estruturação de módulos e serviços no NestJS.

## 🔥 Objetivo

Construir uma API simples com autenticação, registro e login de usuários, utilizando boas práticas de arquitetura com NestJS e TypeScript.

## 🚀 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [JWT (JSON Web Tokens)](https://jwt.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [PostgreSQL] (ou substitua pelo que usou)
- [Prisma ORM](https://www.prisma.io/)
- Insomnia/Postman para testes

## ⚙️ Funcionalidades

- Registro de usuário (com hash da senha)
- Login com geração de token JWT
- Proteção de rotas com autenticação
- Validação com DTOs
- Estrutura modular (controller, service, dto)

## 📁 Estrutura do Projeto

```
src/
 ├── auth/
 │   ├── auth.controller.ts
 │   ├── auth.service.ts
 │   ├── jwt.strategy.ts
 │   ├── auth.module.ts
 ├── users/
 │   ├── users.service.ts
 │   ├── users.controller.ts
 ├── main.ts
```

## 🧪 Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/LHenrique-Marques/auth-api.git
cd auth-api
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o `.env` com os dados do banco e JWT_SECRET:

```env
DATABASE_URL="sua-url-do-banco"
JWT_SECRET="sua_chave_secreta"
```

4. Rode o projeto:

```bash
npm run start:dev
```

5. Teste com Insomnia ou Postman os endpoints de:
- `/auth/register`
- `/auth/login`
- rotas protegidas

## 📚 Aprendizados

- Implementação de autenticação com JWT no NestJS
- Boas práticas com DTOs e Services
- Organização de módulos e controle de acesso
- Utilização de middlewares e guards no Nest

## 📌 Créditos

Este projeto foi desenvolvido com base no conteúdo de [Will Dev](https://www.youtube.com/@willdev9621).
