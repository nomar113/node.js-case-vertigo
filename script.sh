docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11
echo criar a database no postbird com o nome de library
yarn sequelize db:migrate
yarn sequelize db:seed:all
