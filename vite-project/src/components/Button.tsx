import { useState } from "react";

interface Props{
    namePrev: string;
    nameNext: string;
    onClick1: () => void;
    onClick2: () => void;
}

const Button = ({namePrev, nameNext, onClick1, onClick2} : Props) => {
    const [clickCount, setClickCount] = useState(0);

    function toggle(){
        setClickCount(prevClickCount => prevClickCount + 1);
    }
    
  return (
    <span className={clickCount != 19 ? "show" : "noShow" } onClick={toggle}>
        <button onClick={onClick1}>{namePrev}</button>
        <button onClick={onClick2}>{nameNext}</button>
    </span>
    
  )
}

export default Button