// eslint-disable-next-line react/prop-types
const Navbar = ({ isActiveNav }) => {
  return (
    <nav className={`${isActiveNav ? "activeNav" : ""}`}>
      <div className="container">
        <div className="logo">
          <h1>
            <span>S</span>hahzaib
          </h1>
        </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Resume</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
