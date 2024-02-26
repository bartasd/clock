import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from "./App.module.css";
import Clock from "./components/Clock";

function App() {
  return (
    <div className={style.cont}>
      <Clock>

      </Clock>
    </div>
  );
}

export default App;
