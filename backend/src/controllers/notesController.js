import Note from "../models/Node.js";

export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(notes);

  } catch (err) {
    console.log("Error in getAllNotes controller", err);
    
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    res.status(200).json(note);
  } catch (err) {
    console.log("Error in getNoteById controller", err);
    
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const {title, content} = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
    
  } catch (err) {
    console.log("Error in createNote controller", err);

    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const {title, content} = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {
      new: true,
    });

    if (!updatedNote) return res.status(404).json({ message: "Note not found" });
    
    res.status(200).json(updatedNote);
  } catch (err) {
    console.log("Error in updateNote controller", err);

    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) return res.status(404).json({ message: "Note not found" });

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    console.log("Error in deleteNote controller", err);
    
    res.status(500).json({ message: "Internal server error" });
  }
}