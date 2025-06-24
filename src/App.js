import Body from "./components/Body";
import appStore from "./utils/Redux/store/appStore";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

export default App;
