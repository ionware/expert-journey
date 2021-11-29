const InventoryModel = require('@models/inventory');

class InventoryService {
  /**
   * Get all inventories
   * @returns Object|null
   */
  async getAll() {
    return await InventoryModel.find();
  }

  /**
   * Get inventory by id
   *
   * @param {string} id
   * @returns Object|null
   */
  async getInventoryById(id) {
    return await InventoryModel.findById(id);
  }

  /**
   * Create new inventory
   *
   * @param {Object} inventory
   * @returns Object|null
   */
  async addInventory(inventory) {
    return await InventoryModel.create({ ...inventory });
  }

  /**
   * Update inventory
   *
   * @param {string} id
   * @param {Object} inventory
   * @returns Object|null
   */
  async updateInventory(id, inventory) {
    return await InventoryModel.findByIdAndUpdate(id, inventory, { new: true });
  }

  /**
   * Delete an inventory.
   *
   * @param {string} id
   * @returns Object|null
   */
  async deleteInventory(id) {
    return await InventoryModel.findByIdAndDelete(id);
  }
}

module.exports = new InventoryService();
