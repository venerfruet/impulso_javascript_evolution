import React from 'react'
import ReactDom from 'react-dom'
import App from './containers/App'

const rootElement=document.getElementById('app')
ReactDom.render(<App />, rootElement)