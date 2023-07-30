import './App.css';
import React from "react";

function App() {
    const [tasks, setTasks] = React.useState([{text: 'Тестовая задача'}]);

    const onClickAdd = () => {
        const text = prompt('Текст задачи');
        setTasks([...tasks, {text}]);
    };

    const onClickEdit = (index) => {
        const text = prompt('Новый текст задачи')
        setTasks(tasks.map((obj, i) => {
                if (index === i) {
                    // obj.text = text;
                    return {
                        ...obj, text: text,
                    };
                }
                return obj;
            }),
        );
    };

    const onClickRemove = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="App">
            <ul>
                {tasks.map((task, i) => (
                    <li key={i}>
                        {task.text}
                        <button onClick={() => onClickEdit(i)}>
                            Edit
                        </button>
                        <button onClick={() => onClickRemove(i)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={onClickAdd}>Добавить</button>
        </div>
    );
}

export default App;
