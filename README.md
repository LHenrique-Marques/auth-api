# Auth API

API de autenticação simples com NestJS, Prisma e JWT, desenvolvida para estudo com base no vídeo [API de Autenticação com NestJS](https://www.youtube.com/watch?v=K_3b6SlssMc).

## 🚀 Tecnologias

- **Node.js**
- **NestJS**
- **Prisma ORM**
- **JWT (JSON Web Token)**
- **MySQL** (ou outro banco relacional configurado no Prisma)

## 📁 Estrutura do Projeto

```
src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   └── jwt.strategy.ts
├── users/
│   ├── users.service.ts
│   ├── users.module.ts
│   └── users.entity.ts
├── main.ts
└── app.module.ts
```

## ⚙️ Como rodar o projeto

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/auth-api.git
cd auth-api
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure o `.env`**

Crie um arquivo `.env` com o seguinte conteúdo:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_banco"
JWT_SECRET="sua_chave_secreta"
```

4. **Crie as tabelas com Prisma**

```bash
npx prisma migrate dev --name init
```

5. **Rode o projeto**

```bash
npm run start:dev
```

## 🧪 Endpoints

- `POST /auth/signup` - Cadastro de usuário
- `POST /auth/login` - Login e geração de token
- `GET /auth/me` - Rota protegida que retorna dados do usuário autenticado (com JWT)

## 📚 Créditos

Projeto baseado no vídeo de [João Ribeiro Dev](https://www.youtube.com/watch?v=K_3b6SlssMc)
