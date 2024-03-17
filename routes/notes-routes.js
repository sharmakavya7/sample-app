import { Router } from "express";

import { 
    notesController
} from "../controller/notes-controller.js";

const router = Router();
router.get("/notes", notesController);

export default router;