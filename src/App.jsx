import style from "./App.module.css";
import Clock from "./components/Clock";
import Select from "./components/Select";
import { ContextWrapper } from './context/GlobalContext';

function App() {
  return (
    <ContextWrapper>
      <div className={style.cont}>
        <Clock>
        </Clock>
        <Select></Select>
      </div>
    </ContextWrapper>
  );
}

export default App;
