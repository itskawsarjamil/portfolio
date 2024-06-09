// Home button
import styled from "styled-components";

const ResumeBtn = styled.button`
  position: fixed;
  top: 2rem;
  left: 2%;

  background-color: #fcf6f4;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #000;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const ResumeButton = () => {
  return (
    <a
      style={{ color: "inherit" }}
      target="_blank"
      href={
        "https://drive.google.com/file/d/1omPSVYbEbBlqZ5-Q-ahfzFbS-oyL3SSL/view?usp=sharing"
      }
    >
      {/* Resume */}
      <ResumeBtn>Resume</ResumeBtn>
    </a>
    // <Power>
    //   <NavLink to="/">
    //     <PowerBtn width={30} height={30} fill="currentColor" />
    //   </NavLink>
    // </Power>
  );
};

export default ResumeButton;
