import style from "./Clock.module.css";
import Numbers from "./Numbers";
import Tickers from "./Tickers";

export default function Clock(){
    return (<div className={style.clockPerimeter}>
        <div className={style.clockDot}></div>
        <Numbers></Numbers>
        <Tickers></Tickers>
    </div>);
}
