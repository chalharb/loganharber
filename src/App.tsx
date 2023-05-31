import styled from "styled-components";
import Button from "./components/Button";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

function App() {
  return (
    <>
      <Title>Hello World</Title>
      <Button>Click Me!</Button>
    </>
  );
}

export default App;
