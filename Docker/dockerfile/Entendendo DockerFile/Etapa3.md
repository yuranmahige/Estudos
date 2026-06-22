Perfeito! Você executou os comandos corretamente.

Só uma **pequena correção de digitação** no seu segundo comando: você escreveu `1.o` (com a letra 'o') em vez de `1.0` (com o zero). No terminal, isso geraria um erro de "imagem não encontrada". O correto é:
`docker run meu-primeiro-docker:1.0`

Se você rodou corretamente (com o zero), deveria ter visto a mensagem:
`"Olá! Estou rodando dentro de um container Docker!"`
...e o container teria parado logo em seguida.

### Por que ele parou?
Como o seu script apenas imprime uma mensagem e termina (`console.log`), o processo principal do container acaba. Quando o processo principal termina, o container **para** automaticamente (é por isso que ele aparece na lista de `docker ps -a` mas não no `docker ps`).

---

### 🚀 Etapa 3: Aplicação Real (Servidor Web)

Agora vamos fazer algo mais útil para quem trabalha com **HTML, CSS e JS**. Vamos criar um container que **não para sozinho**, pois ele ficará rodando um servidor web esperando conexões.

Vamos usar o pacote `http-server` (que é super leve e não precisa de configuração complexa como o Express) para servir seus arquivos estáticos.

**O Plano:**
1.  Criar um `index.html` simples.
2.  Atualizar o `Dockerfile` para instalar o `http-server` e rodá-lo.
3.  Usar a flag `-p` (port) no `docker run` para acessar o site pelo seu navegador no Ubuntu.

**Tarefa Prática:**

1.  Na mesma pasta, crie um arquivo `index.html`:
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Meu Docker JS</title>
    </head>
    <body>
        <h1>Funciona! Meu HTML roda no Docker.</h1>
        <p>Estou servindo arquivos estáticos com Node.js.</p>
    </body>
    </html>
    ```

2.  Atualize o seu `Dockerfile` para este conteúdo:
    ```dockerfile
    FROM node:18
    WORKDIR /app
    COPY . .
    # Instala o http-server globalmente durante o build
    RUN npm install -g http-server
    # Inicia o servidor na porta 8080, ouvindo em todos os IPs (0.0.0.0)
    CMD ["http-server", "-p", "8080", "-a", "0.0.0.0"]
    ```
    *Nota: O `-a 0.0.0.0` é crucial. Sem ele, o servidor roda apenas dentro do container e você não consegue acessar de fora.*

3.  Gere a nova imagem (pode usar o mesmo nome, ele vai atualizar):
    `docker build -t meu-primeiro-docker:1.0 .`

4.  Rode o container com **mapeamento de porta**:
    `docker run -p 8080:8080 meu-primeiro-docker:1.0`

    *Explicação da flag `-p 8080:8080`:* O primeiro número é a porta do **seu Ubuntu**. O segundo é a porta **dentro do container**. Isso cria um "túnel" entre eles.

**Desafio:**
Após rodar o comando, abra seu navegador no Ubuntu e acesse `http://localhost:8080`.

Me diga: **Você conseguiu ver sua página HTML?** E o container continua rodando (não voltou ao prompt de comando imediatamente)?


