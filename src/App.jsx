import styled from "styled-components";
import Contents from "./components/Contents";
import InputBar from "./components/InputBar";

function App() {

  return (

    <WarpEntire>
      <InputBar />
      <Contents />
    </WarpEntire>
  );
}

export default App;

const WarpEntire = styled.div`
  width: 1100px;
  margin: 0px auto;
`