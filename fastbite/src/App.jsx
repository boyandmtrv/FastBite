import './App.css';
import { appId, appKey } from './api/key';
import Axios from 'axios';

function App() {

    const url = `https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free`;

    async function getRecipes() {
        const result = await Axios.get(url);
        console.log(result.data);
    };

    return (
        <h1 onClick={getRecipes}>Hi there</h1>
    )
}

export default App
