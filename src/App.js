
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Pages/Home';
import EditorPages from './Pages/EditorPages';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element = {<Home />}>

     </Route>
     <Route path ="/editor/:roomId" element ={<EditorPages />}>

     </Route>
     </Routes>
    </BrowserRouter>
    
  );
}

export default App;
