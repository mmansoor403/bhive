import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Banner from "./banner";
import Choose from "./choose";
import Space from "./space";
import Download from "./download";
import axios from "axios";
import { useAppDispatch } from "../../hooks";
import { addSpaceList } from "../../reducer/spaces";
import { SpaceData } from "../../Constants";
import Loader from "../../Components/Loader";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      fetchSpaces();
    }, 3000);
  }, []);

  const fetchSpaces = async () => {
    try {
      const response = await axios.get<SpaceData[]>(
        "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json"
      );
      dispatch(addSpaceList(response.data));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <Layout>
      <Banner />
      <Choose />
      <Space />
      <Download />
    </Layout>
  );
};

export default Home;
