import { Link } from 'react-router-dom';

function App() {
  return (
    <div id='homepage' className='homepage'>
      <div id='hp-title' className='hp-title'>
        <h1 className='h-lg'>My Study Notes</h1>
        <Link className='start-btn' to='/libraries'>Go to Libraries</Link>
      </div>
      <div id='quote'>

      </div>
    </div>
  );
}

export default App;
