const router = require('express').Router();
const {
  get,
  getById,
  create,
  update,
  remove,
} = require('@controllers/inventory.controller');
const authMiddleware = require('@middlewares/auth.middleware');

// Ensure that the user is authenticated before making any request
router.use(authMiddleware);

router.get('/', get);

router.get('/:id', getById);

router.post('/', create);

router.patch('/:id', update);

router.delete('/:id', remove);

module.exports = router;
