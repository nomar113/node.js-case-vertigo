module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'library',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
