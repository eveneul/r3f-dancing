import { RecoilRoot } from "recoil";
import "./App.css";
import MainCanvas from "./components/MainCanvas";
import { Wrapper } from "./components/Wrapper";

function App() {
  return (
    <>
      <RecoilRoot>
        <Wrapper>
          <MainCanvas />
        </Wrapper>
      </RecoilRoot>
    </>
  );
}

export default App;
