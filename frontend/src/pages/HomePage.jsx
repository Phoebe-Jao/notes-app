import Layout from "../components/Layout";
import Grid from "../components/Grid";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async() => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        console.log(res.data);
      } catch (err) {
        console.log("Error fetching notes", err);
        
      }
    }
  }, [])

  return (
    <Layout>
      <Grid />
    </Layout>
  )
}

export default HomePage;