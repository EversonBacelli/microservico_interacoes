# Microsserviço de Operações 🚀

Este é um microsserviço desenvolvido em **Node.js** com **Express**, utilizando o padrão **DAO (Data Access Object)** para persistência de dados em um banco de dados relacional **MySQL** (hospedado no AlwaysData). O projeto foi desenhado para rodar em arquitetura *Serverless* com deploy automatizado na **Vercel**.

O objetivo principal deste serviço é gerenciar o fluxo de operações comerciais, controlando o cadastro e relacionamento entre Clientes, Categorias, Produtos, Pedidos e Itens de Pedidos.

---

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js (v20+)
* **Framework Web:** Express
* **Banco de Dados:** MySQL (Hospedado via AlwaysData)
* **Driver de Banco:** `mysql2/promise` (Conexões assíncronas e pooling eficiente)
* **Gerenciamento de Variáveis de Ambiente:** `dotenv`
* **Plataforma de Deploy:** Vercel

---

## 📁 Estrutura de Pastas

A arquitetura do projeto segue uma divisão clara de responsabilidades, isolando o acesso a dados da lógica de inicialização:

```text
OPERACOES/
├── app/
│   ├── DAO/
│   │   └── conexao.js          # Configuração do Pool de conexões do MySQL
│   ├── models/
│   │   ├── clientes/
│   │   │   └── getCliente.js   # Regras de negócio e queries de Clientes
│   │   └── produto/            # Regras de negócio e queries de Produtos
│   └── index.js                # Ponto de entrada da API (Express App)
├── .env                        # Variáveis de ambiente locais (Ignorado no Git)
├── .gitignore                  # Proteção de arquivos sensíveis
├── package.json                # Dependências e scripts do projeto
├── query.sql                   # Scripts DDL e DML do Banco de Dados
└── vercel.json                 # Configuração de rotas para a Vercel
