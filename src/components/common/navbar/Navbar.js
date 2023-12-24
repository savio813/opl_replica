import React,{ useState}from 'react';
import "./Navbar.css";


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sm: bg custom-nav p-4">
      <div className="sm: container mx-auto flex flex-col md:flex-row justify-between custom-header">
               
        <div className="flex items-center">
          
          <div className="flex-shrink-0 md:flex-row">
            <img
              src="https://www.ombrulla.com/logo.svg"
              alt="Logo"
             className='w-16 md:w-32 lg:w-48 custom-logo'
            />
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <button
            className="custom-btn md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
        </div>


        {/* Navigation Menu */}
        <div className={`custom-drp bg-white md:bg-transparent  md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ${isMenuOpen ? 'absolute md:relative ml-auto' : 'hidden'}`}>
          <NavItem label="Home" />
          <NavItem label="Service" dropdownItems={["Ai Visual Inspection", "AI Infrastructure Inspection", "AI People Tracking", "AI Data Analytics"]} />
          <NavItem label="Product" dropdownItems={["Asset Performance Managemet"]} />
          <NavItem label="About" />
          <NavItem label="Blog" />
          <NavItem label="Contact" />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ label, dropdownItems }) => {
  const hasDropdown = Array.isArray(dropdownItems) && dropdownItems.length > 0;

  return (
    <div className={`relative group ${hasDropdown ? 'hover:bg-navbar' : ''}`}>
       {/* Menu Item  */}
      <button className="text-navbar custom-text focus:outline-none">
        {label}
      </button>

      {/* Dropdown */}
      {hasDropdown && (
        <div className="absolute hidden dropdown-bg text-dropdown group-hover:block">
          <ul className=" p-2">
            {dropdownItems.map((item, index) => (
              <li key={index} className="dropdown-text box-border p-2 border border-gray-300 custom-text custom-box">{item}</li>

            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
