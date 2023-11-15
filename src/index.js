import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'

const GolbalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GolbalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
