type MessagePrototype = {
    msg: string;
    value?: number;
    date?: Date;
}


const Message = ({msg, value, date}:MessagePrototype) => {
    return (
        
        <h2>{msg} {value} {date?.toLocaleTimeString()}</h2>
    )
}

export default Message;
