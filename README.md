# Exercicio_vivo

A API retorna a porcentagem de cacau dependendo do tipo de chocolate. Para:

tipo A: 80% de cacau.

tipo B: 85% de cacau.

tipo C: 90% de cacau.

===============================
<br>

## Para acessar a api

Para acessar a api faça requisição do tipo GET na URL final "/api/:id", sendo o ":id" a Letra referente o tipo do chocolate.

**Exemplo:**

Para verificar tipo A de chocolate envie requisição GET para "/api/A" e terá o retorno na porcetagem de cacau.

> Se for requisição local use "http://localhost:3000/api/A"


<br>


OBS.
- A API não é case sensitive por isso a requisição GET para "/api/A" é similar a requisição GET para "/api/a"
- Caso seja eviado no GET algo diferente retorna "Error".

<br>

## Para acessar a a documentação

Para acessar a api faça requisição do tipo GET na URL final "/docs"

> Se for requisição local use "http://localhost:3000/docs"

<br>


## Outras rotas

Caso tente outra rota API retorna erro 404.

===============================
<br>

# Preparar ambiente

## Node.js
- Instale o Node:
- Digite ``npm install`` para instalar as dependências

<br>


### Tests

Para verificar os tests use: ``npm test`` 

Ele executará os tests unitários da função e também testará a API usando o "supertest".

<br>


### Executar server via nodemon
Para executar o server da aplicação use: ``npm start`` 

Ele iniciará a execução do server usando o nodemon

<br>


## Para executar o server da aplicação via docker

- Execute os passos do Node.js
- Instale o docker:

Use:

- Para fazer Build da imagem: ``docker build -t app .``

- Para fazer executar a imagem: ``docker run -dp 3000:3000 app``

<br>


## Para executar o server da aplicação via docker-compose

- Execute os passos do Node.js
- Instale o docker:

- Para usar fazer o build e executar o compose: ``docker compose build && docker compose up``

