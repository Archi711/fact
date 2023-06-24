import { createRoot } from 'react-dom/client'
import { Game } from './game'
import './global.css'
const rootElement = document.querySelector('div#root')

if (!rootElement) throw new Error('No container found in html document, cya!')

const root = createRoot(rootElement)

root.render(<Game />)
