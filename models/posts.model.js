const getAllPosts = () => {
    return db.query('select * from posts');
}

module.exports = {
    getAllPosts
}