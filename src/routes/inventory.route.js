const router = require('express').Router();
const {
  get,
  getById,
  create,
  update,
  remove,
} = require('@controllers/inventory.controller');

router.get('/', get);

router.get('/:id', getById);

router.post('/', create);

router.patch('/:id', update);

router.delete('/:id', remove);

module.exports = router;
