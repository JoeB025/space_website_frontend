Instructions:

Set-up:

npm create vite@latest 
Choose a project name.
Following instructions in the terminal to set up the project. 

Run npm run dev and click the link to open locally.


GitHub:
Create a new repo on gitHub and link


install axios - npm install axios 

install react Router - npm i -D react-router-dom



in the app file, import the following: 

import { useEffect, useState } from 'react'
import { Routes, Route } from'react-router-dom'

check the dependancies have been added to the package.json file 
- axios / react-router-dom etc...  and any others you installed. (vite may not always show) 



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
