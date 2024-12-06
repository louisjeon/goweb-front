import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"; // useNavigate 추가
import { customAxios } from "../customAxios";
import CommentElement from "./CommentElement";
import WriteCommentElement from "./WriteCommentElement";

const StyledPost = styled.div`
  .boardContainer {
    border: 1px solid #e0e0e0;
    margin: 20px auto;
    padding: 25px;
    max-width: 900px;
    background: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    color: #2c2c2c;
    font-size: 16px;
    line-height: 1.6;

    .editTitle {
      font-size: 24px;
      font-weight: bold;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      padding: 10px;
      margin-top: 10px;
      margin-left: 20px;
      width: 93%;
      margin-bottom: 20px;
      outline: none;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .editContent {
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      padding: 10px;
      margin-left: 20px;
      width: 93%;
      height: 200px;
      resize: vertical;
      font-size: 14px;
      margin-bottom: 20px;
      outline: none;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    h1 {
      font-size: 27px;
      font-weight: bold;
      color: #2c2c2c;
      margin-bottom: 30px;
      margin-left: 30px;
    }

    p {
      margin-bottom: 20px;
      margin-left: 30px;
      color: #6e6e6e;
    }

    .buttonContainer {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-bottom: 20px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #819ff7;
      color: white;
      border: none;
      border-radius: 12px;
      padding: 8px 15px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    button:hover {
      background-color: #5882fa;
    }

    button:active {
      background-color: #5882fa;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;
    }

    .listButton {
      background-color: white;
      color: #819ff7;
      border: 2px solid #819ff7;
    }

    .listButton:hover {
      background-color: #f2f2f2;
      color: #5882fa;
    }

    .listButton:active {
      background-color: #e6e6e6;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;
    }
  }
`;

const Post = () => {
  const [searchParams] = useSearchParams();
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [postId, setPostId] = useState();
  const [date, setDate] = useState();
  const [content, setContent] = useState();
  const [editTitle, setEditTitle] = useState();
  const [editContent, setEditContent] = useState();
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    customAxios.get(`posts/${searchParams.get("id")}`).then((res) => {
      const data = res.data;
      setTitle(data.title);
      setAuthor(data.author);
      setPostId(data._id);
      setDate(data.createdAt);
      setContent(data.content);
    });
  }, [editMode]);

  useEffect(() => {
    customAxios
      .get(`comments/${searchParams.get("id")}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  });

  const handleEditStart = () => {
    setEditTitle(title);
    setEditContent(content);
    setEditMode(true);
  };

  const handleEditFinish = () => {
    customAxios
      .put(`posts/${searchParams.get("id")}`, {
        title: editTitle,
        content: editContent,
      })
      .then((res) => {
        console.log(res);
        setEditMode(false);
      })
      .catch((err) => console.log(err));
  };

  const handleEditTitleChange = (e) => {
    setEditTitle(e.target.value);
  };

  const handleEditContentChange = (e) => {
    setEditContent(e.target.value);
  };

  const handleBackToBoard = () => {
    navigate("/board");
  };

  const updateComments = () => {
    customAxios
      .get(`/comments/${postId}`)
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledPost>
      <div className="boardContainer">
        {editMode ? (
          <input
            className="editTitle"
            defaultValue={title}
            onChange={handleEditTitleChange}
          />
        ) : (
          <h1>{title}</h1>
        )}
        <p>{date}</p>
        {editMode ? (
          <textarea
            className="editContent"
            defaultValue={content}
            rows={20}
            onChange={handleEditContentChange}
          />
        ) : (
          <p>{content}</p>
        )}
        <div className="buttonContainer">
          {editMode ? (
            <button onClick={handleEditFinish}>수정 완료</button>
          ) : (
            <button onClick={handleEditStart}>포스트 수정</button>
          )}
          <button className="listButton" onClick={handleBackToBoard}>
            목록
          </button>
        </div>
        {comments.map((comment, i) => {
          return (
            <CommentElement
              key={i}
              comment={comment}
              updateComments={updateComments}
            />
          );
        })}
        <WriteCommentElement
          author={author}
          postId={postId}
          updateComments={updateComments}
        />
      </div>
    </StyledPost>
  );
};

export default Post;
