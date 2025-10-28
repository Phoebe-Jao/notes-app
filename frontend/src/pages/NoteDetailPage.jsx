import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Layout from "../components/Layout";
import BackToNote from "../components/BackToNote";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";
import api from "../lib/axios";

const NoteDetailPage = () => {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);
  

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (err) {
      console.log("Error deleting the note", err);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (err) {
      console.log("Error saving the note", err);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Layout>
      <div className="w-full max-w-4/5 mx-auto">
        <div className="flex justify-between items-center pt-3">
          <BackToNote />
          <button onClick={handleDelete} className="text-red text-[1.2rem] font-bold flex items-center gap-1 ui-bg py-2 px-4 max-sm:px-2 mb-4">
            <FontAwesomeIcon icon={faTrash} className="text-red text-[1.1rem] mt-1" />
            <span className="max-sm:hidden">Delete Note</span>
          </button>
        </div>
        <form action="" className="ui-bg border-shadow p-5 rounded-2xl max-w-[60%] max-sm:max-w-full flex flex-col">
          <div className="flex flex-col mb-6">
            <label htmlFor="title" className="text-black text-[1.2rem] font-bold pb-2">Title: </label>
            <input type="text" name="title" id="title" className="form-input min-h-10" placeholder="Note Title" value={note.title} onChange={(e) => setNote({ ...note, title: e.target.value })} required />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="content" className="text-black text-[1.2rem] font-bold pb-2">Description: </label>
            <textarea name="content" id="content" className="form-input min-h-50" placeholder="Note Description" value={note.content} onChange={(e) => setNote({ ...note, content: e.target.value })} required></textarea>
          </div>
          <button type="submit" disabled={saving} onClick={handleSave} className="cursor-pointer max-sm:text-[1rem] font-bold w-full max-w-max ml-auto ui-bg bg-primary border-shadow trs-300 hover:translate-y-1 hover:shadow-[0_2px_0_0_rgba(0,0,0,1)] px-5 max-sm:px-3 py-2 whitespace-nowrap">
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default NoteDetailPage;