const { getAll } = require('../../models/autores.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [autores] = await getAll();
        res.json(autores);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;