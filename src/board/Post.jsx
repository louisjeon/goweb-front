import styled from "styled-components";
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
  const [editTitle, setEditTitle] = useState();
  const [editContent, setEditContent] = useState();

  useEffect(() => {
    setTitle("포스트 제목");
    setContent("포스트 내용");
    setEditTitle(title);
    setEditContent(content);
  }, []);

  const handleEditStart = () => {
    setEditMode(true);
  };

  const handleEditFinish = () => {
    setTitle(editTitle);
    setContent(editContent);
    setEditMode(false);
  };

  const handleEditTitleChange = (e) => {
    setEditTitle(e.target.value);
  };

  const handleEditContentChange = (e) => {
    setEditContent(e.target.value);
  };

  return (
    <StyledPost>
      <div className="boardContainer">
        {editMode ? (
          <input
            class="editTitle"
            defaultValue={title}
            onChange={handleEditTitleChange}
          />
        ) : (
          <h1>{title}</h1>
        )}
        <p>포스트 날짜</p>
        {editMode ? (
          <textarea
            class="editContent"
            defaultValue={content}
            rows={20}
            onChange={handleEditContentChange}
          />
        ) : (
          <p>{content}</p>
        )}
        <p>{searchParams.get("id")}번 포스트입니다.</p>
        {editMode ? (
          <button onClick={handleEditFinish}>수정 완료</button>
        ) : (
          <button onClick={handleEditStart}>포스트 수정</button>
        )}
      </div>
    </StyledPost>
  );
};

export default Post;
