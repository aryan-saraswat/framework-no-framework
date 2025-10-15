import { useRef } from "react";

const TaskCreator = ({ updateTasks }) => {
    const inputRef = useRef("");

    const onClick = () => {
        updateTasks(inputRef.current.value);
    };

    return (
        <>
            <input ref={inputRef} />
            <button onClick={onClick}>create</button>
        </>
    );
};

export default TaskCreator;
