const Item = require('../../models/Item');

const readItemService = async (id) => {
  try {
    // Fetch the item by id
    const item = await Item.findByPk(id);

    if (!item) {
      throw new Error('Item not found');
    }
    return item;

  } catch (error) {
    throw new Error(`Error fetching item: ${error.message}`);
  }
};

module.exports = readItemService;
