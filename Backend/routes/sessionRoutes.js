import express from "express";
import {
  getAllPublicSessions,
  getUserSessions,
  getSingleSession,
  saveDraft,
  publishSession,
} from "../controllers/sessionController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const app = express.Router();

app.get("/sessions", getAllPublicSessions);
app.get("/my-sessions", authMiddleware, getUserSessions);
app.get("/my-sessions/:id", authMiddleware, getSingleSession);
app.post("/my-sessions/save-draft", authMiddleware, saveDraft);
app.post("/my-sessions/publish", authMiddleware, publishSession);

export default app;
