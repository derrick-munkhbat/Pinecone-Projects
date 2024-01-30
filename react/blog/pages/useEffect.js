import { useEffect, useState } from "react";

// export default function Home() {
//     const [value, setValue] = useState('')
    
//     useEffect(() => {
//         console.log("2laa uurchlugdsun");
//     },  [value]);

//     const onChange = (event) => {
//         setValue(event.target.value);
//     };


//     return <input value={value} onChange={onChange}/>
// }


export default function Home() {

    return  <Timer seconds = {3} />;
}
  
const Timer=({seconds}) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft-1);
        }, 1000);

        return () => clearInterval(intervalId);

    }, [timeLeft, isPaused]);

    console.log("timeLeft", timeLeft);
    console.log("isPaused", isPaused);

    return(
        <div className="flex gap-5">
            <button onClick={() => setIsPaused(true)}>pause</button>
            <button onClick={() => setIsPaused(false)}>continue</button>
            <button onClick={() => setTimeLeft(seconds)}>reset</button>
        </div> 
    );

};




  