export const notesController = (req, res) => res.send("Hello");

export const createNote = (req, res) => { 
    console.log("hello post-request") ; 
    console.log(req.body) ; 
    res.send("hi");
};