### 📋 Plano de Estudo: Do Zero ao Dockerfile Node.js

Para garantir que você entenda cada conceito, dividirei nosso estudo em 4 etapas. Só avançaremos quando você confirmar que dominou a anterior.

1.  **O Conceito e a Estrutura:** Entender a diferença entre Imagem e Container e conhecer as instruções básicas (`FROM`, `WORKDIR`, `COPY`, `RUN`, `CMD`).
2.  **Mão na Massa (Hello World):** Criar seu primeiro `Dockerfile` para um script simples em Node.js.
3.  **Aplicação Real (HTML/CSS/JS):** Criar uma imagem para um servidor web (usando `http-server` ou `express`) que sirva seus arquivos estáticos.
4.  **Otimização e Boas Práticas:** Aprender sobre `.dockerignore`, camadas de cache e redução de tamanho da imagem.


### 🚀 Etapa 1: O Conceito e a Estrutura

Imagine o **Dockerfile** como uma **receita de bolo**.
*   O **Dockerfile** é o papel com a receita escrita.
*   A **Imagem** (`docker build`) é o bolo assado e embalado (pronto para distribuição, mas não está sendo comido).
*   O **Container** (`docker run`) é o bolo sendo fatiado e servido (a receita em execução).

Enquanto os comandos que você já usa (`docker run`, `docker start`) são ações manuais no terminal, o `Dockerfile` automatiza e documenta exatamente como aquele ambiente deve ser criado.

#### As Instruções Principais (Focando em JS)

Aqui estão os comandos que você verá dentro de um arquivo `Dockerfile`, traduzidos para o seu contexto:

| Instrução | O que faz? | Analogia JS/Dev |
| :--- | :--- | :--- |
| **`FROM`** | Define a imagem base. | É como importar uma biblioteca gigante ou escolher o sistema operacional base (ex: `node:18`). |

| **`WORKDIR`** | Define o diretório de trabalho dentro do container. | É como dar um `cd /app` antes de começar a trabalhar. |

| **`COPY`** | Copia arquivos do seu PC (Host) para dentro do Container. | Copia seu `package.json` e código fonte para dentro da "caixa". |

| **`RUN`** | Executa comandos **durante a criação da imagem**. | É como rodar `npm install` *antes* de enviar o pacote. Fica salvo na imagem. |

| **`CMD`** | Define o comando que roda **ao iniciar o container**. | É o comando que liga seu servidor (ex: `node server.js`). Só roda quando você dá o `docker run`. |

#### A Diferença Crucial: `RUN` vs `CMD`

Essa é a maior dúvida de quem começa:
*   **`RUN`**: Acontece **uma vez** quando você cria a imagem (`docker build`). Serve para instalar dependências (`npm install`).
*   **`CMD`**: Acontece **toda vez** que o container sobe (`docker run`). Serve para iniciar a aplicação (`node app.js`).




### 📝 Seu Primeiro Desafio Mental

Antes de criarmos o arquivo, quero confirmar se a lógica fez sentido.

Imagine que temos um projeto simples com um arquivo `index.js` que imprime "Olá Docker" e um `package.json`.

Se eu escrevesse um Dockerfile assim:

```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "index.js"]
```

**Pergunta rápida para fixar:**
Quando você rodar o comando `docker build`, qual dessas linhas será executada? E quando você rodar `docker run`, qual será executada?

Responda com sua compreensão e, se tiver dúvidas sobre alguma instrução, pergunte! Assim que você confirmar, partimos para a **Etapa 2** criando isso na prática no seu Ubuntu.
