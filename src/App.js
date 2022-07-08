import './App.css';
import DogBox from './components/dogs/dogs';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <DogBox />
      </Provider>
    </>
  );
}

export default App;
