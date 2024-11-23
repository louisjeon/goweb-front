import styled from "styled-components";

const StyledPostElement = styled.div`
  width: 100%;
  border: 1px black solid;
  background: white;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
  .inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 3%;
  }
`;

const PostElement = ({ title, numOfComments, date }) => {
  return (
    <StyledPostElement>
      <div className="inner">
        <div className="title">
          {title}
          {numOfComments ? `[${numOfComments}]` : null}
        </div>
        <div className="date">{date}</div>
      </div>
    </StyledPostElement>
  );
};

export default PostElement;
