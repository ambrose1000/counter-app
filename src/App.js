import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import Profile from './components/Profile';
import State from './components/State';



function App() {
  return (
    <div className="App">
     <State />
      <header className="App-header">
       {/* <img src={logo} className="App-logo" alt="logo" />*/}
       <div style = { {display: 'inline-flex'} } >
       {/* <Counter />*/}
       
        <Profile name = 'ambrose' number= '074357899' email = 'xcvd@asdc.com' occ = 'Programmer' />
        <Profile name = 'saidimu'number= '0087893211' email = 'great@asdc.com' occ = 'Engeneer' />
        <Profile name = 'ryan' number= '078945732' email = 'genius@asdc.com' occ = 'Farmer' />

        </div>
 
      </header>
    </div>
  );
}

export default App;
