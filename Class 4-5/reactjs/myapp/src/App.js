
import MyRoute from "./MyRoute";
import Cartreducer from "./redux/reducer/Cartreducer";
import { createStore } from "redux";
import { Provider } from "react-redux";


function App() {
  const store = createStore(Cartreducer);
  return (
    <>
    <Provider store={store}>

     <MyRoute/>
    </Provider>
    </>
  );
}

export default App;
