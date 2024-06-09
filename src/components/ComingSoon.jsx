import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh-88px);
  text-align: center;
`;
const Spin = styled.div`
  width: 3rem;
  height: 3rem;
  border-width: 8px;
  border-style: dashed;
  border-radius: 9999px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  margin-top: 5;
  border-color: rgb(239 68 68);
`;
const Letter = styled.p`
  font-size: 4.5rem;
  font-weight: bold;
  padding-right: 0.5rem;
`;

const ComingSoon = () => {
  return (
    <Div>
      {/* <p className="text-7xl font-bold">C</p> */}
      <Letter>C</Letter>
      {/* <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin mt-5 border-red-500"></div> */}
      <Spin></Spin>
      <Letter className="text-7xl font-bold">ming</Letter>
      <Letter className="text-7xl font-bold">S</Letter>
      {/* <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin mt-5 border-red-500"></div> */}
      <Spin></Spin>
      <Spin></Spin>
      <Letter className="text-7xl font-bold">n....</Letter>
    </Div>
  );
};

export default ComingSoon;
