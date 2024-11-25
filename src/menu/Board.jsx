import styled from "styled-components";
import PostElement from "../board/PostElement";
import { useEffect, useState } from "react";

const StyledBoard = styled.div`
  .boardContainer {
    margin: 20px auto;
    padding: 25px;
    max-width: 900px;
    background: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    font-family: "Arial", sans-serif;
    color: #2c2c2c;

    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 10px;
      margin: 8px 0;
      border-radius: 10px;
      background-color: #f9f9f9;
      text-decoration: none;
      color: #2c2c2c;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: #e6f3ff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        cursor: pointer;
      }
    }
  }

  .pagenation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    .inner {
      display: flex;
      gap: 10px;

      .num {
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
        border-radius: 20%;
        background-color: #f2f2f2;
        color: #585858;
        border: none;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: #a9d0f5;
          color: white;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
        }

        &.active {
          background-color: #a9d0f5;
          color: white;
        }
      }
    }
  }
`;

const Board = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState();

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 24; i++) {
      arr.push([
        i,
        `안녕하세요`,
        Math.floor(Math.random() * 10),
        `2025.01.${i + 1 < 10 ? "0" + (i + 1) : i + 1}`,
      ]);
    }
    arr = arr.reverse();
    setAllPosts(arr);
    setPage(1);
  }, []);

  useEffect(() => {
    setPosts(allPosts.slice((page - 1) * 10, page * 10));
  }, [page]);

  const handlePagenation = (page) => {
    setPage(page);
  };

  useEffect(() => {
    fetch();
  });

  return (
    <StyledBoard>
      <div className="boardContainer">
        {posts.map(([...props]) => (
          <a href={`/post?id=${props[0]}`}>
            <PostElement
              id={props[0]}
              title={props[1]}
              numOfComments={props[2]}
              date={props[3]}
            />
          </a>
        ))}
        <div className="pagenation">
          <div className="inner">
            {[...Array(Math.ceil(allPosts.length / 10))].map((_, i) => (
              <div
                key={i + 1}
                className={`num ${page === i + 1 ? "active" : ""}`}
                onClick={() => handlePagenation(i + 1)}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledBoard>
  );
};

export default Board;
