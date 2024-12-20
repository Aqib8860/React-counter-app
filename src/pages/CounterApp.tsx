import Message from "../components/Message";
import Button from "../components/Button";
import { useState } from "react";

const CounterApp = () => {
    const [counter, setCounter] = useState<number>(0);

    const plus = () => {
       setCounter(counter + 1);
       console.log(counter);
    }

    const minus = () => {
        setCounter(counter - 1);
        console.log(counter);
    }

    let current_date = new Date();

    return (<div>
        <Message msg="Counter App" />
        <Message msg="Count is" value={counter} />
        
        <Button label="+" fn={plus} />&nbsp;&nbsp;
        <Button label="-" fn={minus}/>

        <Message msg="Button Clicked On" date={current_date} />

    </div>
    )
}
export default CounterApp;
