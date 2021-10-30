import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getAllPostIds, getPostData } from "../../lib/posts";

const Post: NextPage<{ postData: any }> = ({ postData }) => {
  return (
    <div>
      <h1 className="text-primary mb-1">{postData.title}</h1>
      <p className="text-sm text-secondary">Date: {postData.date}</p>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export default Post;
