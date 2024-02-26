import style from "./Tickers.module.css";

export default function Numbers(){
    return (
        <>
        <div className={`${style.tickerCont} ${style.hourCont}`} style={{ transform: `rotate(${2 * 30}deg)` }}>
            <div className={style.hour}></div>
        </div>
        <div className={`${style.tickerCont} ${style.minuteCont}`} style={{ transform: `rotate(${4 * 30}deg)` }}>
            <div className={style.minute}></div>
        </div>  
        <div className={`${style.tickerCont} ${style.secondCont}`} style={{ transform: `rotate(${5 * 30}deg)` }}>
            <div className={style.second}></div>
        </div>
        </>
    );
}