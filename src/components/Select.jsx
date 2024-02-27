import style from "./Select.module.css";
import { useState, useContext  } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export default function Select(){
    const [currentGMT, setGmt] = useState(0);
    const [currentTime, setTime] = useState([0,0,0]);
    const { updateTime } = useContext(GlobalContext);

    const handleGmt = (e) => {
        const GMT = e.target.value;
        setGmt(GMT);
        fetch(`https://worldtimeapi.org/api/timezone/Etc/GMT${GMT>=0 ? "-"+GMT : "+"+ GMT*(-1)}`)
          .then(response => response.json())
          .then(data => setTime(data.datetime.slice(11,19).split(":")))
          .catch(error => console.error(error));
        updateTime(currentTime);
    };

    const options = [];

    options.push(<option value="0"  selected disabled hidden>Select an option</option>)

    for (let i = -11; i < 12; i++) {
        if(i<0)
            options.push(<option value={i}>GMT{i}</option>);
        else
            options.push(<option value={i}>GMT+{i}</option>);
    }

    return (
        <>
        <p>Selected GMT: {currentGMT}</p>
        <div className={style.cont}>
            <label for="gmt-select">Choose your GMT:</label>
            <select name="gmt" id="gmt-select" onChange={handleGmt}>
                {options}
            </select>
        </div>
        </>
    );
}