module.exports = (inventory) => {
  const { id, name, description, price, quantity, image, label, createdAt } =
    inventory;

  return {
    type: 'inventory',
    id,
    attributes: {
      name,
      description,
      price,
      quantity,
      image,
      label,
      createdAt,
    },
  };
};
