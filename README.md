# node.js-case-vertigo

Execute o comando para criar container Docker com o Postgres: 
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11

Criar a database no postbird com o nome de library

Executar os comandos seguintes para gerar as tabelas e inserir dados os dados de livros na aplicação:
yarn sequelize db:migrate
yarn sequelize db:seed:all
