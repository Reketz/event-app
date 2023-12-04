import './App.css';
import { useEffect } from 'react';

function handleClick() {
    console.log('clicou no h1');
}

function App() {

    useEffect(() => {
        document.getElementById('evento')?.addEventListener('click', handleClick);
    }, []);

    return (
        <div className="App">
            <h1 id='evento'>Clique</h1>
        </div>
    );
}

export default App;
