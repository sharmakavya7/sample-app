import { Router } from "express";

import { 
    notesController, 
    createNote
} from "../controller/notes-controller.js";

const router = Router();
router.get("/notes", notesController);
router.post("/notes", createNote);

export default router;