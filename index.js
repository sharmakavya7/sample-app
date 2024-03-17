import notesRoutes from "./routes/notes-routes.js";

import express from "express";
const app = express ();

app.use(notesRoutes);
app.listen(3000, () => console.log('Example app listening on port 3000!'));