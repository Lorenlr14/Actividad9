const getAllPosts = () => {
    return db.query('select * from posts, autores where posts.id = 2 and posts.autores_id = autores.id;');
}
const createPosts = ({ titulo, descripcion, fecha_creacion, categoria, autores_id }) => {
    return db.query(
        'insert into posts (titulo, descripcion, fecha_creacion, categoria, autores_id) values (?, ?, ?, ?, ?)',
        [titulo, descripcion, fecha_creacion, categoria, autores_id]
    );
}
const getPostsById = (authorId) => {
    return db.query('select * from posts where posts.autores_id = ?', [authorId]);
}

module.exports = {
    getAllPosts,
    createPosts,
    getPostsById
}