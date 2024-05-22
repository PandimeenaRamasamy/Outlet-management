
import './App.css';
import Sidenavbar from './components/Sidenavbar/Sidenavbar'
import Outlet from './components/Outletnavbar/Outlet'
import Footer from './components/Footer/Footerbar'
function App() {
  return (
    <div >
      <Sidenavbar/>
      <Outlet/>
      <Footer/>

    </div>
  );
}

export default App;
