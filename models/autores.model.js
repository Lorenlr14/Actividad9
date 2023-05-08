const getAll = () => {
    return db.query('select * from autores');
}
const create = ({ nombre, email, imagen }) => {
    return db.query(
        'insert into autores (nombre, email, imagen) values (?, ?, ?)',
        [nombre, email, imagen]
    );
}

module.exports = {
    getAll,
    create
}