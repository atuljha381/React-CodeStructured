import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className='container my-3'>
      <TextForm heading="Enter text to analyze here" />

      </div>
    </>
  );
}

export default App;
