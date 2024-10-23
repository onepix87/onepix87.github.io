import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './pages/login';
import './app.css'

const App: React.FC = () => {
    // Routes go here
    return <Login />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);