import Link from "next/link";
import { GetServerSideProps, NextPage } from "next";
import { redirect } from "next/dist/server/api-utils";

const Home: NextPage<{ allPostsData: Array<any> }> = ({ allPostsData }) => {
  return null
};

export const getStaticProps = () => {
  return {
    props: {},
    redirect: {
      destination: '/posts'
    }
  }
}

export default Home;
