import { useState, useEffect } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import Note from "./Note";
import RateLimitedUI from "./RateLimitedUI";

const Grid = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async() => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (err) {
        console.log(err);
        
        console.log("Error fetching notes", err);
        if (err.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes", {
            duration: 5000,
          });
        }
      } finally {
        setLoading(false);
      }
    }

    fetchNotes();
  }, []);

  return (
    <section className="w-full max-w-4/5 max-sm:max-w-[90%] mx-auto my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-3 gap-y-7 max-sm:gap-5">
        {
          notes.map((note) => (
            <Note
              key={note._id}
              note={note}
            />
        ))}
      </div>
      { isRateLimited && <RateLimitedUI /> }
    </section>
  )
}

export default Grid;