const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('Prueba posts');
});

module.exports = router;