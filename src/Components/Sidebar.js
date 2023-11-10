import './Sidebar.css'
import HomeIcon from "../assets/icons/home.png"
import BookIcon from "../assets/icons/book-of-black-cover-closed.png"
import LibraryIcon from "../assets/icons/books-stack-of-three.png"
import CameraIcon from "../assets/icons/security-camera.png"

const Sidebar = () => {
    return (
      <div className="sidebar overlay">
        <div className="nav-links">
          <img src={HomeIcon} alt="Home" />
          <div className="nav-title">Summary Dashboard</div>
        </div>
        <div className="nav-links">
          <img src={LibraryIcon} alt="Home" />
          <div className="nav-title">Attendance Tracking</div>
        </div>
        <div className="nav-links">
          <img src={CameraIcon} alt="Home" />
          <div className="nav-title">Behavioral Analytics</div>
        </div>
        <div className="nav-links">
          <img src={BookIcon} alt="Home" />
          <div className="nav-title">Academic Performace Tracking</div>
        </div>
      </div>
    );
}

export default Sidebar;