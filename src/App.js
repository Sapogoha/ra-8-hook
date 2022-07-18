import './App.css';
import GetData from './components/GetData';

function App() {
  return (
    <>
      <GetData endpoint="data" />
      <GetData endpoint="error" />
      <GetData endpoint="loading" />
    </>
  );
}

export default App;
