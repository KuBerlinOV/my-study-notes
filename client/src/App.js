import { Link } from 'react-router-dom';

function App() {
  return (
    <div id='homepage' className='homepage'>
      <div id='hp-title' className='hp-title'>
        <h1 className='h-lg'>My Study Notes</h1>
        <p className='h-subtitle'><Link className='h-subtitle' to='/libraries'>Start to organize your knowledge</Link></p>
      </div>
      <div id='quote'>

      </div>
    </div>
  );
}

export default App;
