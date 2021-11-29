const UserModel = require('@models/user');

class UserService {
  constructor() {
    this.userModel = UserModel;
  }

  /**
   * Get user by Id.
   *
   * @param {string} userId
   * @returns Object|null
   */
  async getUser(userId) {
    return await UserModel.findById(userId);
  }

  /**
   * Find user by their email address.
   *
   * @param {string} email
   * @returns Object|null
   */
  async getUserByEmail(email) {
    return await UserModel.findOne({ email });
  }

  /**
   * Get all users in the database.
   *
   * @returns {Object}
   */
  async getUsers() {
    return await UserModel.find({});
  }

  /**
   * Create a new user.
   *
   * @param {object} user
   * @returns Object
   */
  async createUser(user) {
    const newUser = new UserModel(user);
    return await newUser.save();
  }

  /**
   * Update the record of an existing user.
   *
   * @param {string} userId
   * @param {object} user
   * @returns Object|null
   */
  async updateUser(userId, user) {
    return await UserModel.findByIdAndUpdate(userId, user, { new: true });
  }

  /**
   * Delete a user.
   *
   * @param {string} userId
   * @returns Object|null
   */
  async deleteUser(userId) {
    return await UserModel.findByIdAndDelete(userId);
  }
}

module.exports = new UserService();
