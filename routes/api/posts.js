const { getAllPosts } = require('../../models/posts.model');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [posts] = await getAllPosts();
        res.json(posts);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;