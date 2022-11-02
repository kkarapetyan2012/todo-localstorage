import React, { useState } from 'react';
import './App.css';
import Btn from './components/buttons/Button';
import TabsContent from './components/tabs/TabsContent';
import Typography from './components/typography/Typography';

const tabs = [
  {
    id: 1,
    title: 'All',
  },
  {
    id: 2,
    title: 'Active',
  },
  {
    id: 3,
    title: 'Completed',
  }
]

type newTasksProp = {
  id: number;
  title: string;
  isCompleted: boolean;
}

function App() {

  const [toggleTabs, setToggleTabs] = useState<number>(1);
  const toggleTab = (index: number) => setToggleTabs(index);

  return (
    <div className='contaier'>
      <Typography typography="h1" title='#todo' />
      
      <div className='tabs-head'>
        {tabs.map((tab) =>
          <Btn 
            type='button'
            mode='none'
            onClick={() => toggleTab(tab.id)} 
            key={tab.id.toString()}
            className={`tab ${toggleTabs === tab.id ? 'active' : ''}`}
          >
            {tab.title}
          </Btn>
        )}
      </div>

      <TabsContent toggleTabs={toggleTabs} />

    </div>
  );
}

export default App;
