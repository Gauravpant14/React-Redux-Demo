import "./App.css";
import CakeContainer from "./compontents/CakeContainer";
import { Provider, provider } from 'react-redux'
import store from './redux/cake/store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <CakeContainer />
    </div>
    </Provider>
    
  );
}

export default App;
