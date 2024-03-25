Instructions:

Set-up:

npm create vite@latest 
Choose a project name.
Following instructions in the terminal to set up the project. 

Run npm run dev and click the link to open locally.


GitHub:
Create a new repo on gitHub and link



In the main file, update the file to the following: 

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
