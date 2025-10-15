import { useState } from "react";
import Task from "../Task/Task";
import TaskCreator from "../TaskCreator/TaskCreator";

const TaskHolder = () => {
    const [tasks, setTasks] = useState([]);

    const pushTasks = (text) => {
        const newTask = { description: text };
        setTasks([...tasks, newTask]);
    };

    return (
        <>
            <TaskCreator updateTasks={pushTasks} />
            {tasks.map((task, idx) => {
                return <Task key={idx} description={task.description} />;
            })}
        </>
    );
};

export default TaskHolder;
