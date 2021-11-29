const routeWrapper = require('@utils/async');
const {
  create: createRule,
  update: updateRule,
} = require('@requests/inventory.validator');
const dbService = require('@services/inventory.service');
const inventoryResource = require('@resources/inventory.resource');

/**
 * Get all Inventories.
 */
const get = routeWrapper(async (req, res) => {
  const inventories = await dbService.getAll();
  // no inventory created yet.
  if (!inventories) return res.status(200).json({ data: [] });

  const response = inventories.map(inventoryResource);

  return res.status(201).json({ data: response });
});

/**
 * Get a single inventory by its ID.
 */
const getById = routeWrapper(async (req, res) => {
  const { id } = req.params;
  // get inventory by id
  const inventory = await dbService.getInventoryById(id);
  if (!inventory)
    return res.status(404).json({ message: 'Inventory not found' });

  const response = inventoryResource(inventory);

  return res.status(200).json({ data: response });
});

/**
 * Create a new inventory.
 */
const create = routeWrapper(async (req, res) => {
  const data = req.body;

  // fetch inventory
  const inventory = await dbService.addInventory({
    ...data,
    addedBy: req.user.id,
  });

  if (!inventory)
    return res.status(400).json({ message: 'Inventory not created' });

  const response = inventoryResource(inventory);

  return res.status(201).json({ data: response });
});

/**
 * Update an inventory.
 */
const update = routeWrapper(async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  // fetch inventory
  const inventory = await dbService.updateInventory(id, data);
  if (!inventory)
    return res.status(404).json({ message: 'Inventory not found.' });

  const response = inventoryResource(inventory);

  return res.status(200).json({ data: response });
});

/**
 * Delete a inventory by its ID.
 */
const remove = routeWrapper(async (req, res) => {
  const { id } = req.params;
  const inventory = await dbService.deleteInventory(id);
  if (!inventory)
    return res.status(404).json({ message: 'Inventory not found' });

  const response = inventoryResource(inventory);

  return res.status(200).json({ data: response });
});

module.exports = {
  get,
  getById,
  create: [createRule, create],
  update: [updateRule, update],
  remove,
};
