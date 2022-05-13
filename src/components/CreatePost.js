// import React, { useState } from "react";
import React from "react";
import { db } from "../firebase";
import { useFormInput } from "../hooks";
import styledComponents, { css } from "styled-components";

// import buttonStyle from "../assets/css/button.module.css";

// we pass props here because this is a function
const StyledButton = styledComponents.button`
  height: 33px;
  background: ${(props) => (props.primary ? "#4caf50" : "blue")};
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;

  // we need to use css if we need to give styles using props
  ${(props) =>
    props.primary &&
    css`
      border: 1px solid red;
      color: ${props.textColor};
    `}
`;

function CreatePost(props) {
  // const [title, setTitle] = useState("");
  // const [subTitle, setSubTitle] = useState("");
  // const [content, setContent] = useState("");

  const title = useFormInput("");
  const subTitle = useFormInput("");
  const content = useFormInput("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("title : ", title);
    console.log("subTitle : ", subTitle);
    console.log("content : ", content);

    // db.collection("posts").add({
    //   title,
    //   subTitle,
    //   content,
    //   createdAt: new Date()
    // })

    db.collection("posts").add({
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date(),
    });
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          {/* <input value={title} onChange={(e) => setTitle(e.target.value)} /> */}
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          {/* <input
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          /> */}
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          {/* <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea> */}
          <textarea {...content} />
        </div>

        {/* <button className={buttonStyle.createPostBtn}>Create Post</button> */}
        <StyledButton>Create Post</StyledButton>
        <StyledButton primary textColor="red">
          Create Post
        </StyledButton>
      </form>
    </div>
  );
}

export default CreatePost;
