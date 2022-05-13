import { useState, useEffect } from "react";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";

// we can assume it as a functional component
const BlogHeading = styledComponents.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`;

const PostSubtitle = styledComponents.p`
  font-size: 13px;
`;

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        console.log("posts", posts);
        setPosts(posts);
      });
  }, []);

  return (
    <div className="home">
      {/* inline styling */}
      {/* <h1 style={styles.heading}>Tech Blog</h1>  */}
      <BlogHeading>Tech Blog</BlogHeading>
      <div id="blog-by">Harsh Prasad</div>
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <PostSubtitle>{post.subTitle}</PostSubtitle>
        </div>
      ))}
    </div>
  );
}

export default Home;

// const styles = {
//   heading: {
//     marginTop: 30, // px is by default
//     fontSize: 56,
//   },
// };
