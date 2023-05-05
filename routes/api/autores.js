const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('Prueba autores');
});

module.exports = router;