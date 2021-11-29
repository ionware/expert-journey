const authRoutes = require('@routes/auth.route');
const profileRoutes = require('@routes/profile.route');
const inventoryRoutes = require('@routes/inventory.route');

/**
 * We will just map the routes resource with their respective
 * namespaces. This will safe the express app from having to
 * explicitly specify the namespace for each route.
 */
module.exports = {
  auth: authRoutes,
  profile: profileRoutes,
  inventory: inventoryRoutes,
};
