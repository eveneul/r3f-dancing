import { RecoilRoot } from "recoil";
import "./App.css";
import FixedDom from "./components/dom/FixedDom";
import MainCanvas from "./components/MainCanvas";
import { Wrapper } from "./components/Wrapper";

function App() {
  return (
    <>
      <RecoilRoot>
        <Wrapper>
          <MainCanvas />
          <FixedDom />
        </Wrapper>
      </RecoilRoot>
    </>
  );
}

export default App;
