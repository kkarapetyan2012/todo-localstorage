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
            const savedTodos = localStorage.getItem("todos");
            if (savedTodos) {
                return JSON.parse(savedTodos);
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
        setTasks([...tasks.filter((todo: newTasksProp) => todo.id !== id)])
    }

    // remove all completed tasks
    const removeAllCompletedTask = () => {
        setTasks([...tasks.filter((todo: newTasksProp) => todo.isCompleted !== true)])
    }

    // toggle task is completed
    const handleToggle = (id: number) => {
        setTasks([
            ...tasks.map((todo: newTasksProp) => 
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : {...todo }
            )
        ])
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        setLoading(true)
    }, [tasks]);  

    const completedList = [...tasks.filter((todo: newTasksProp) => todo.isCompleted === true)];
    const notCompletedList = [...tasks.filter((todo: newTasksProp) => todo.isCompleted === false)];

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
              {tasks.map((todo: newTasksProp) => {
                return (
                  <ToDo
                    todo={todo}
                    key={todo.id.toString()}
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
              {tasks.map((todo: newTasksProp) => {
                return (
                  <>
                    {!todo.isCompleted && <ToDo
                      todo={todo}
                      key={todo.id.toString()}
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
                {tasks.map((todo: newTasksProp) => {
                  return (
                    <>
                        {!!todo.isCompleted && <ToDo
                            todo={todo}
                            key={todo.id.toString()}
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