const { getAllPosts, createPosts, getPostsById } = require('../../models/posts.model');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [posts] = await getAllPosts();
        res.json(posts);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const [result] = await createPosts(req.body);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/:authorId', async (req, res) => {
    const { authorId } = req.params;
    try {
        const [posts] = await getPostsById(authorId);
        if (posts.length === 0) {
            return res.json({ fatal: 'No hay posts escritos por ese autor' });
        }
        res.json(posts);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;