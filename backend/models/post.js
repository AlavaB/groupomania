module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("post", {
        id: {
            type: DataTypes.UUID, allowNull: false, defaultValue: DataTypes.UUIDV4, primaryKey: true, unique: true//UUID = unique user identifier, généré par Sequelize automatiquement
        },
        content: {
            type: DataTypes.STRING, allowNull: true
        },
        image: {
            type: DataTypes.STRING, allowNull: true
        },
        user_id: {
            type: DataTypes.UUID, allowNull: true, references: {
                model: 'users',
                key: 'id'
            }
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
          },
          updated_at: {
            type: DataTypes.DATE,
            allowNull: true
          },
        
    }, {
        underscored: true
    });

    return Post;
};

