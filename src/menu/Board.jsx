import styled from "styled-components";
import PostElement from "../board/PostElement";
import { useEffect, useState } from "react";

const StyledBoard = styled.div`
  .boardContainer {
    border: 1px black solid;
    border-radius: 5px;
    margin: 20px;
    padding: 5%;
    font-size: 14px;
    a {
      color: inherit;
      text-decoration: none;
    }
  }
  .pagenation {
    display: flex;
    flex-direction: row;
    align-items: center;
    .inner {
      display: flex;
      margin: auto;
      .num {
        margin: 10px;
        height: 20px;
        width: 20px;
      }
      .num:hover {
        cursor: pointer;
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
              <div className="num" onClick={() => handlePagenation(i + 1)}>
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
