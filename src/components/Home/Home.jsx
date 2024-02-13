import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {

    
    return (
        <div  className="mx-auto w-full max-w-7xl text-center " id="home">
          
            <h1 className="text-2xl sm:text-5xl py-10 font-medium">What a wonderful day!</h1>
            You can add tasks and assign tasks to categories at <a href="manage" className='underline'>Manage</a>
            <p>See the day's tasks at <a href="daily-tasks" className='underline'>Daily Tasks</a></p>
            
        </div>
    );
}