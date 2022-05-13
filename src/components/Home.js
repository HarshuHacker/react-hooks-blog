import { useState, useEffect } from "react";
import { db } from "../firebase";
import { Link } from "react-router-dom";

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
      <h1 style={styles.heading}>Tech Blog</h1>  {/* inline styling */}
      <div id="blog-by">Harsh Prasad</div>

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>

          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;

const styles = {
  heading: {
    marginTop: 30, // px is by default
    fontSize: 56
  }
}