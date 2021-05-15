import { Link } from 'react-router-dom';

function App() {
  return (
    <div id='homepage' className='homepage'>
      <div id='hp-title' className='hp-title'>
        <h1 className='hd-large'>My Study Notes</h1>
        <p><Link to='/libraries'>Start to organize your knowledge</Link></p>
      </div>
      <div id='quote'>

      </div>
    </div>
  );
}

export default App;
