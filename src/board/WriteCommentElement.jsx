import styled from "styled-components";
import { customAxios } from "../customAxios";
import { useState } from "react";

const StyledWriteCommentElement = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 5px auto 5px auto;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    font-family: "Arial", sans-serif;
    font-size: 14px;
    color: #333333;

    .comment {
      flex: 1;
      display: flex;
      .email {
        margin-right: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      input {
        flex: 1;
        background: white;
        border: none;
        border-radius: 5px;
      }
      button {
        margin-left: 10px;
      }
    }
  }
`;

const WriteCommentElement = ({ postId, author, updateComments }) => {
  const [comment, setComment] = useState("");

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    console.log(comment);
    customAxios
      .post("/comments", {
        content: comment,
        postId,
        authorId: author._id,
      })
      .then((res) => {
        console.log(res);
        setComment("");
        updateComments();
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledWriteCommentElement>
      <div className="inner">
        <div className="comment">
          <b className="email">{author?.email}</b>
          <input onChange={handleInputChange} value={comment} />
          <button onClick={handleSubmit}>댓글 작성</button>
        </div>
      </div>
    </StyledWriteCommentElement>
  );
};

export default WriteCommentElement;