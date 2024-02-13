import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'

import {CatForm, TodoForm} from './components'
import TaskMgm from './components/TaskMgm.jsx'
import DailyTasks from './components/DailyTasks.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='manage' element={<TaskMgm />} />
      <Route path='daily-tasks' element={<DailyTasks/>} />
    
      <Route path='*' element={<div>Not found</div>} />   
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
