import './App.css';
import Post from './pages/posts_page/posts_page'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import store from "./redux/store"
import { Provider } from "react-redux";


function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Router>
          <Routes>
            <Route exact path='/' element={<Post />} />
            <Route exact path='/posts' element={<Post />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
