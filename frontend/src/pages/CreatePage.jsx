import Layout from "../components/Layout";
import toast from "react-hot-toast";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });
      toast.success("Note created successfully!", {
        duration: 5000,
      });
      navigate("/");
    } catch (err) {
      console.log("Error creating note", err);
      if (err.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast.", {
          duration: 5000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note.", {
          duration: 5000,
        });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <div className="w-full max-w-4/5 max-sm:max-w-[87%] mx-auto pt-7 pb-20 max-sm:pt-5 max-sm:pb-14">
        <Link to={"/"} className="ui-bg border-shadow trs-300 hover:translate-y-1 hover:shadow-[0_2px_0_0_rgba(0,0,0,1)] text-[1.4rem] max-sm:text-[1.3rem] font-bold mb-4 flex gap-3 items-center p-3 w-max rounded-2xl">
          <FontAwesomeIcon icon={faArrowLeft} className="text-black text-[1.1rem] mt-1" />
          Back to Notes
        </Link>
        <form action="" onSubmit={handleSubmit} className="ui-bg border-shadow p-5 rounded-2xl max-w-[60%] max-sm:max-w-full flex flex-col">
          <div className="flex flex-col mb-6">
            <label htmlFor="title" className="text-black text-[1.2rem] font-bold pb-2">Title: </label>
            <input type="text" name="title" id="title" className="form-input min-h-10" placeholder="Note Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="content" className="text-black text-[1.2rem] font-bold pb-2">Description: </label>
            <textarea name="content" id="content" className="form-input min-h-50" placeholder="Note Description" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
          </div>

          <button type="submit" className="cursor-pointer max-sm:text-[1rem] font-bold w-full max-w-max ml-auto ui-bg bg-primary border-shadow trs-300 hover:translate-y-1 hover:shadow-[0_2px_0_0_rgba(0,0,0,1)] px-5 max-sm:px-3 py-2 whitespace-nowrap">
            New Note
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default CreatePage;