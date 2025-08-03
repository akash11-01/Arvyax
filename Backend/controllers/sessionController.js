import { Session } from "../models/session.model.js";

export const getAllPublicSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ status: "published" }).populate(
      "user_id",
      "email"
    );
    res.status(200).json(sessions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ user_id: req.user.id });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getSingleSession = async (req, res) => {
  try {
    const session = await Session.findOne({
      _id: req.params.id,
      user_id: req.user.id,
    });
    if (!session) return res.status(404).json({ message: "Session not found" });
    res.json(session);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const saveDraft = async (req, res) => {
  const { id, title, tags, json_file_url } = req.body;
  try {
    const update = {
      title,
      tags: tags.split(",").map((tag) => tag.trim()),
      json_file_url,
      status: "draft",
      user_id: req.user.id,
      updated_at: new Date(),
    };

    const session = id
      ? await Session.findOneAndUpdate(
          { _id: id, user_id: req.user.id },
          update,
          { new: true }
        )
      : await new Session(update).save();

    res.status(200).json(session);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const publishSession = async (req, res) => {
  const { id } = req.body;
  try {
    const session = await Session.findOneAndUpdate(
      { _id: id, user_id: req.user.id },
      { status: "published", updated_at: new Date() },
      { new: true }
    );
    res.json(session);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
