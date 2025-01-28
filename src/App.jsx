import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './features/utils/Navbar';
import { Provider } from 'react-redux';
import {store} from './app/store'
function App() {
  return (
    <Provider store={store}>
      <div className='border border-2 border-info m-2 p-2'>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </Provider>
  );
}

export default App;
