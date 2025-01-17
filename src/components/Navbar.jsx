import '../styles/Navbar.css';
import brandLogo from '../imgs/brandLogo.png';
import { Outlet } from 'react-router-dom';

const Navbar = () =>{
  return(
    <>
      <nav className='navbar'>
        <div className="brand">
          <img src={brandLogo} alt="logo"className="logo"/>
          <div className="company-name">Firstbench</div>
        </div>
        <div className="dashboard btn"><i className="fi fi-rr-house-window"></i>Dashboard</div>
        <div className="firstguru btn"><i className="fi fi-rr-sparkles"></i>FirstGuru</div>
        <div className="townhall btn"><i className="fi fi-rr-fort"></i>TownHall</div>
        <div className="ai-evaluation btn"><i className="fi fi-rr-bolt"></i>AI Evaluation</div>
        <div className="performance btn"><i className="fi fi-rr-chart-line-up"></i>Performance</div>
        <div className="mock-test btn"><i className="fi fi-rr-memo"></i>Mock Test</div>
        <div className="bell"><i className="fi fi-rs-cowbell"></i></div>
        <div className="prof-sec">
          <div className="profile-pic">P</div>
          <div className="profile">Profile</div>
          <i className="fi fi-br-angle-small-down dropdown"></i>
        </div>

      </nav>
      <Outlet/>
    </>
  )
}
export default Navbar;