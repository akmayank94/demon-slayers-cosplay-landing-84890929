
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a div to mount the app if it doesn't exist (helps with static site generation)
const rootElement = document.getElementById("root") || document.createElement("div");
if (!rootElement.id) {
  rootElement.id = "root";
  document.body.appendChild(rootElement);
}

createRoot(rootElement).render(<App />);
