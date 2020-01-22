import Sequelize, { Model } from 'sequelize';

class Book extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                author: Sequelize.STRING,
                category: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

export default Book;
