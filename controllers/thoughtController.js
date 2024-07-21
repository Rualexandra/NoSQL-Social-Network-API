import thought from '../models/thought.js'; 
import user from '../models/user.js'; 
const thoughtController = {
  getThoughts(req, res) {
    thought.find()
      .then(thoughts => res.json(thoughts))
      .catch(err => res.status(500).json(err));
  },
  getThoughtById(req, res) {
    thought.findOne({ _id: req.params.thoughtId })
      .then(thought => res.json(thought))
      .catch(err => res.status(500).json(err));
  },
  createThought(req, res) {
    thought.create(req.body)
      .then(thought => {
        return user.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  },
  updateThought(req, res) {
    thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then(thought => res.json(thought))
      .catch(err => res.status(500).json(err));
  },
  deleteThought(req, res) {
    thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then(thought => {
        return user.findOneAndUpdate(
          { thoughts: req.params.thoughtId },
          { $pull: { thoughts: req.params.thoughtId } },
          { new: true }
        );
      })
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch(err => res.status(500).json(err));
  },
  addReaction(req, res) {
    thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
    )
      .then(thought => res.json(thought))
      .catch(err => res.status(500).json(err));
  },
  removeReaction(req, res) {
    thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then(thought => res.json(thought))
      .catch(err => res.status(500).json(err));
  }
};

export default thoughtController;
