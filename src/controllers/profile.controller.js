const { getUser } = require('@services/user.service');
const routeWrapper = require('@utils/async');

const getProfile = routeWrapper(async (req, res) => {
  const { id } = req.user;
  const user = await getUser(id);

  return res.status(200).json({
    id: user.id,
    name: user.name,
    email: user.email,
  });
});

module.exports = {
  getProfile,
};
