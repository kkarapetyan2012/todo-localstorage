import React, { FC, useState, useEffect } from 'react';
import Input from '../forms/Input';
import { IconDelete } from '../icons/Icons';
import ToDo from '../todo/Todo';
import Btn from '../buttons/Button';

type newTasksProp = {
    id: number;
    title: string;
    isCompleted: boolean;
}

const TabsContent: FC<{toggleTabs: number}> = ({ toggleTabs }) => {

    const [userInput, setUserInput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const [tasks, setTasks] = useState<newTasksProp[]>(
        () => {
            const savedTasks = localStorage.getItem("tasks");
            if (savedTasks) {
                return JSON.parse(savedTasks);
            } else {
                return [];
            }
        }
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.currentTarget.value)
    }

    // add new task
    const addTask = (userInput: string) => {
        setTasks([
            ...tasks, 
            {
                id: Date.now(),
                title: userInput,
                isCompleted: false,
            }
        ]);
        setUserInput("");
    }

    // remove one item
    const removeTask = (id: number) => {
        setTasks([...tasks.filter((task: newTasksProp) => task.id !== id)])
    }

    // remove all completed tasks
    const removeAllCompletedTask = () => {
        setTasks([...tasks.filter((task: newTasksProp) => task.isCompleted !== true)])
    }

    // toggle task is completed
    const handleToggle = (id: number) => {
        setTasks([
            ...tasks.map((task: newTasksProp) => 
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : {...task }
            )
        ])
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        setLoading(true)
    }, [tasks]);  

    const completedList = [...tasks.filter((task: newTasksProp) => task.isCompleted === true)];
    const notCompletedList = [...tasks.filter((task: newTasksProp) => task.isCompleted === false)];

    return (
        <div className='tabs-content'>
        <div className={`tab-content ${toggleTabs === 1 ? 'active' : ''}`}>
          
        {!loading ? <span>loading...</span> : <>
          <div className='d-flex justify-space-between'>
            <Input 
              name=""
              value={userInput}
              type="text"
              onChange={handleChange}
              placeholder="add details"
            />
            <Btn 
              mode='main' 
              disabled={userInput === ''}
              onClick={() => addTask(userInput)}
              className={`${userInput === '' ? 'btn__disabled' : ''}`}
            >
              Add
            </Btn>
          </div>
          {tasks.length > 0 && <ul className="todo-list">
            {tasks.map((task: newTasksProp) => {
              return (
                <ToDo
                  task={task}
                  key={task.id.toString()}
                  toggleTask={handleToggle}
                  removeTask={removeTask}
                  toggleTabs={toggleTabs}
                />
              )
            })}
          </ul>}
        </>}
      </div>

      <div className={`tab-content ${toggleTabs === 2 ? 'active' : ''}`}>
        {!loading ? <span>loading...</span> : <>
          <div className='d-flex justify-space-between'>
            <Input 
              name=""
              value={userInput}
              type="text"
              onChange={handleChange}
              placeholder="add details"
            />
            <Btn 
              mode='main' 
              disabled={userInput === ''}
              onClick={() => addTask(userInput)}
              className={`${userInput === '' ? 'btn__disabled' : ''}`}
            >
              Add
            </Btn>
          </div>
          {notCompletedList.length > 0 && <ul className="todo-list">
            {tasks.map((task: newTasksProp) => {
              return (
                <>
                  {!task.isCompleted && <ToDo
                    task={task}
                    key={task.id.toString()}
                    toggleTask={handleToggle}
                    removeTask={removeTask}
                    toggleTabs={toggleTabs}
                  />}
                </>
              )
            })}
          </ul>}
        </>}
      </div>
      
      <div className={`tab-content ${toggleTabs === 3 ? 'active' : ''}`} >
        {!loading ? <span>loading...</span> : <>
          {completedList.length > 0 &&
            <ul className="todo-list" style={{paddingTop: 0}}>
              {tasks.map((task: newTasksProp) => {
                return (
                  <>
                      {!!task.isCompleted && <ToDo
                          task={task}
                          key={task.id.toString()}
                          toggleTask={handleToggle}
                          removeTask={removeTask}
                          toggleTabs={toggleTabs}
                      />}
                  </>
                )
              })}
            </ul>
          }
        </>}
        {completedList.length > 1 &&
          <Btn 
              className='d-flex ml-auto' 
              type='button' 
              mode='danger' 
              onClick={() => {removeAllCompletedTask()}}
          >
            <IconDelete color='#fff' /> delete all
          </Btn>
        }
      </div>
    </div>     
    );
};

export default TabsContent;