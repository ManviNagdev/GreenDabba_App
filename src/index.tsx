// Import deps
import React from 'react'
import { render } from 'react-dom'
// Import components
import { Recipe } from './components/recipe'
// Import styles
import './styles/styles.css'
// Find div container
const rootElement = document.getElementById('root')
// Render recipe component in the DOM
render(<Recipe />, rootElement)
