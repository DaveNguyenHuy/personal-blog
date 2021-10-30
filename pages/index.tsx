import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { replace } = useRouter();

  useEffect(() => {
    replace("/posts");
  }, [replace]);

  return null;
};

export default Home;
