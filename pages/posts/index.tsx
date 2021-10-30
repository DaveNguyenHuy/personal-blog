import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import { NextPage } from "next";

const Posts: NextPage<{ allPostsData: Array<any> }> = ({ allPostsData }) => {
  return (
    <div>
      <h2 className="mb-4">All Posts</h2>
      <ul className="list-group">
        {allPostsData.map(({ id, date, title }, index) => (
          <li className="list-group-item" key={index}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Posts;
