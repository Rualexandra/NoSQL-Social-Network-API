import user from '../models/user.js' ;
import thought from '../models/thought.js';

const userController = {
  getUsers(req, res) {
    user.find()
      .populate('thoughts')
      .populate('friends')
      .then(users => res.json(users))
      .catch(err => res.status(500).json(err));
  },
  getUserById(req, res) {
    user.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends')
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  },
  createUser(req, res) {
    user.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  },
  updateUser(req, res) {
    user.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  },
  deleteUser(req, res) {
    user.findOneAndDelete({ _id: req.params.userId })
      .then(user => thought.deleteMany({ _id: { $in: user.thoughts } }))
      .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
      .catch(err => res.status(500).json(err));
  },
  addFriend(req, res) {
    user.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  },
  removeFriend(req, res) {
    user.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  }
};

export default userController;
