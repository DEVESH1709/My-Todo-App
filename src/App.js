
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Todo from './components/Todo';

function App() {
  return (<div className=' bg-violet-400 w-screen h-screen mt-0 overflow-hidden'>
    <Provider store={store}>
    <Todo></Todo>
     
    </Provider>

    </div>
  );
}

export default App;
