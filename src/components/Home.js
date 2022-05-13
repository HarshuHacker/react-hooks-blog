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

const Post = styledComponents.div`
  border: 1px solid #e1e1e1;
  padding: 10px 10px;
  border-radius: 5px;
  margin-top: 10px;

  // & tell that we need to apply sudo classes to the current scope
  // here the scope is Post
  &:hover {
    border: 1px solid #2196f3;
  }

  h3{
    margin: 0;
    padding: 0;
    font-size: 25px;
    font-weight: bold;
    color: #9c9c9c;
    // here the scope is h3 tag
    &:hover {
      color: #2196f3;
    }
  }

  a {
    text-decoration: none;
  }

  @media(max-width: 800px) {
    border: 1px solid red;
  }
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
        <Post className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <PostSubtitle>{post.subTitle}</PostSubtitle>
        </Post>
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
