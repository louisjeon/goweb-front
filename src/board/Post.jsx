import styled from "styled-components";
import PostElement from "../board/PostElement";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const StyledPost = styled.div`
  .boardContainer {
    border: 1px black solid;
    border-radius: 5px;
    margin: 20px;
    padding: 30px 5%;
    font-size: 14px;
    .editTitle {
      font-size: 27px;
      font-weight: bold;
    }
    .editContent {
      width: 100%;
    }
  }
`;

const Post = () => {
  const [searchParams] = useSearchParams();
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    setTitle("포스트 제목");
    setContent("포스트 내용");
  }, []);

  return (
    <StyledPost>
      <div className="boardContainer">
        {editMode ? (
          <input class="editTitle" defaultValue={title} />
        ) : (
          <h1>{title}</h1>
        )}
        <p>포스트 날짜</p>
        {editMode ? (
          <textarea class="editContent" defaultValue={content} rows={20} />
        ) : (
          <p>{content}</p>
        )}
        <p>{searchParams.get("id")}번 포스트입니다.</p>
        {editMode ? (
          <button onClick={() => setEditMode(false)}>수정 완료</button>
        ) : (
          <button onClick={() => setEditMode(true)}>포스트 수정</button>
        )}
      </div>
    </StyledPost>
  );
};

export default Post;
