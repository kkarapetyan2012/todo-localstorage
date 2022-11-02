import React, { FC } from 'react';
import Btn from '../buttons/Button';
import Checkbox from '../forms/Checkbox';
import { IconDelete } from '../icons/Icons';

type newTasksProp = {
    id: number;
    title: string;
    isCompleted: boolean;
}

type PropType = {
    task: newTasksProp;
    toggleTask: (id: number) => void;
    removeTask: (id: number) => void;
    toggleTabs: number;
}

const ToDo: FC<PropType> = ({ task, toggleTask, removeTask, toggleTabs }) => {
    const { id, title, isCompleted} = task;

    return (
        <li key={id} className="todo-item d-flex justify-space-between">
            <Checkbox
                name=''
                className=''
                checked={isCompleted}
                label={title}
                onChange={() => toggleTask(id)}
            />
            {toggleTabs === 3 && <Btn mode='none' onClick={() => removeTask(id)} style={{padding: '0 8px'}}>
                <IconDelete color='#BDBDBD' />
            </Btn>}
        </li>
    )
}

export default ToDo