/* eslint-disable require-jsdoc */
import './App.css';
import 'antd/dist/antd.css';
import LayoutHome from './components/LayoutHome/LayoutHome';
import { IsLoggedInProvider } from './context/LoginContext';


function App() {

  return (
    <div>
      <IsLoggedInProvider>
        <LayoutHome/>
      </IsLoggedInProvider>
    </div>
  );
}
export default App;
