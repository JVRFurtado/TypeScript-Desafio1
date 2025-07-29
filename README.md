# 💳 App Simples de Banco com TypeScript

Projeto desenvolvido durante o **desafio de projeto** da formação **TypeScript Fullstack Developer** da [DIO](https://www.dio.me/). A aplicação simula o funcionamento básico de um sistema bancário com múltiplos tipos de contas utilizando **POO com TypeScript**.

## 📦 Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/pt)
- Programação Orientada a Objetos (POO)
- TSX e TSUP para desenvolvimento e build

## 🚀 Funcionalidades

- **Criação de contas**:
  - Conta de Pessoa Física
  - Conta de Pessoa Jurídica
  - Conta com bônus no depósito
- **Operações bancárias**:
  - Depósito com ou sem bônus
  - Saque com validação de saldo
  - Solicitação de empréstimo (para empresas)
  - Consulta de saldo
  - Validação do status da conta

## 🧩 Estrutura de Classes

- `DioAccount` (classe abstrata base)
- `PeopleAccount` (extende DioAccount com CPF)
- `CompanyAccount` (adiciona funcionalidade de empréstimo)
- `NewAccount` (conta com bônus de R$10 em cada depósito)

## 📁 Estrutura de Pastas

```

project-dio-bank/
├── class/
│   ├── CompanyAccount.ts
│   ├── DioAccount.ts
│   ├── NewAccount.ts
│   └── PeopleAccount.ts
├── app.ts
├── tsconfig.json
├── package.json

````

## 🛠️ Scripts Disponíveis

- `npm run start:dev` — Executa a aplicação em modo de desenvolvimento
- `npm run start:watch` — Roda com watch mode
- `npm run dist` — Compila o projeto para a pasta `dist`
- `npm run start:dist` — Compila e executa a versão distribuída

## ▶️ Como Executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/JVRFurtado/TypeScript-Desafio1.git
    ```

2. Instale as dependências:

   ```bash
   npm install
   ```
   
3. Execute em modo desenvolvimento:

   ```bash
   npm run start:dev
   ```

> ✅ Certifique-se de ter o **Node.js** instalado em sua máquina.

## 📚 Aprendizados

* Aplicação prática de classes, herança e encapsulamento em TypeScript
* Implementação de métodos abstratos e validações internas
* Manipulação de contas com diferentes regras de negócio

## 📄 Licença

Este projeto está licenciado sob a licença ISC. Sinta-se à vontade para usá-lo e modificá-lo.

---

🛠️ Projeto criado com 💙 por mim durante os estudos na [DIO](https://www.dio.me/).
