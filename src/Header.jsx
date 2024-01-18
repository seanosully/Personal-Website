import './Header.css'

function Header() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

    return (
      <>
        <div className="top-bar">
          <div className="name-div">
            <a onClick={() => scrollToSection('home')} className="name-text">SEAN O'SULLIVAN</a>
          </div>
          <div className="nav-div">
            <a onClick={() => scrollToSection('home')} className="nav-button">About</a>
            <a onClick={() => scrollToSection('projects')} className="nav-button">Projects</a>
            <a onClick={() => scrollToSection('contact')} className="nav-button">Contact</a>
          </div>
        </div>
      </>
    )
  }
  
  export default Header;
  