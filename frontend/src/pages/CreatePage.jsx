import Layout from "../components/Layout";
import toast from "react-hot-toast";

const CreatePage = () => {
  return (
    <Layout>
      <button onClick={() => toast.success("congrats! your note has been created")} className="cursor-pointer">Create new note</button>
    </Layout>
  )
}

export default CreatePage;