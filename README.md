
# 🔐 Auth Api

Este é um projeto de API de autenticação utilizando **NestJS**, **Prisma** e **JWT**, com banco de dados **PostgreSQL**. O objetivo é fornecer uma base sólida e segura para cadastro e login de usuários, utilizando boas práticas modernas.

---

## 🚀 Tecnologias Utilizadas

| Categoria        | Tecnologias                                                                 |
|------------------|------------------------------------------------------------------------------|
| **Framework**    | [NestJS](https://nestjs.com/), [TypeScript](https://www.typescriptlang.org/) |
| **ORM & Banco**  | [Prisma](https://www.prisma.io/), [PostgreSQL](https://www.postgresql.org/) |
| **Autenticação** | [JWT](https://jwt.io/)                                                       |
| **Validação**    | `class-validator`, `class-transformer`                                       |
| **Execução**     | `ts-node`, `tsconfig-paths`, `reflect-metadata`                              |

---

## 📁 Estrutura do Projeto

```
src/
├── auth/               # Módulo de autenticação
│   ├── dtos/
│   │   └── auth.ts
│   ├── auth.controller.ts
│   ├── auth.guard.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── constants.ts
│   
├── prisma/             # Prisma Service
│   └── prisma.service.ts
├── app.module.ts
└── main.ts
```

---

## ⚙️ Como Rodar o Projeto Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/LHenrique-Marques/auth-api.git
cd auth-api
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o ambiente:**

Crie um arquivo `.env` baseado em `.env.example`:

```
# Exemplo de configuração do ambiente

DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
JWT_SECRET="sua_chave_jwt"
```

4. **Execute as migrações com Prisma:**

```bash
npx prisma migrate dev --name init
```

5. **Rode o projeto:**

```bash
npm run start:dev
```

---

## 🔐 Funcionalidades

- ✅ Cadastro e login de usuários
- ✅ Geração e validação de tokens JWT
- ✅ Rota protegida com guard (`GET /auth/me`)
- ✅ Integração com banco de dados via Prisma
- ✅ Estrutura modular com DTOs e validações

---

## 📬 Rotas Principais

| Método | Rota           | Descrição                            |
|--------|----------------|----------------------------------------|
| POST   | `/auth/signup` | Cadastro de novo usuário              |
| POST   | `/auth/login`  | Login e geração de token JWT          |
| GET    | `/auth/me`     | Retorna perfil do usuário autenticado |

---

## 📄 Licença

Este projeto é livre para uso acadêmico e aprendizado.

---

Desenvolvido por [Luis Henrique Marques Franque Flores](https://www.linkedin.com/in/luis-henrique-marques-franque-flores-508ba126b/)
