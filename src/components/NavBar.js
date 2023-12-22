import { pageLinks, socialLinks } from "../data";
import logo from "../images/logo.png";
const NavBar = () => {
  let text = "";
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img
            src={logo}
            className="nav-logo"
            style={{ width: 150 }}
            alt="My Tours"
          />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link, index) => {
            if (index < pageLinks.length - 1) {
              text = link.text + "  |  ";
            } else {
              text = link.text;
            }
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
