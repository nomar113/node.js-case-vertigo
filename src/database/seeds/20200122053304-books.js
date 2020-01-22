module.exports = {
    up: QueryInterface => {
        return QueryInterface.bulkInsert(
            'books',
            [
                {
                    title: 'Dom Casmurro',
                    author: 'Machado de Assis',
                    category: 'Romance',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    title: 'Clean Code',
                    author: 'Robert Martin',
                    category: 'Tecnologia',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    title: 'Domain-Drive Design',
                    author: 'Eric Evans',
                    category: 'Tecnologia',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    title: 'O Pequeno Príncipe',
                    author: 'Antoine de Saint-Exupéry',
                    category: 'Infantil',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    down: () => {},
};
