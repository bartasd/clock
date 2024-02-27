import style from "./Tickers.module.css";
import { useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

export default function Numbers(){
    const { time } = useContext(GlobalContext);

    let H = ((+time[0]*60 + +time[1])/60)*30;
    let M = (+time[1])*6;
    let S = (+time[2])*6;


    return (
        <>
        <div className={`${style.tickerCont} ${style.hourCont}`} style={{ transform: `rotate(${H}deg)` }}>
            <div className={style.hour}></div>
        </div>
        <div className={`${style.tickerCont} ${style.minuteCont}`} style={{ transform: `rotate(${M}deg)` }}>
            <div className={style.minute}></div>
        </div>  
        <div className={`${style.tickerCont} ${style.secondCont}`} style={{ transform: `rotate(${S}deg)` }}>
            <div className={style.second}></div>
        </div>
        </>
    );
}