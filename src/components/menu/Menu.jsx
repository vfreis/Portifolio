import "./menu.scss";

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">My Stack</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Challenges</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="hubs">
		<li>
			<a href= "https://github.com/vfreis" target="blank"><GitHubIcon/></a>
		</li>
		<li>
		<a href= "https://www.linkedin.com/in/vfalqueiroreis/" target="blank"><LinkedInIcon/></a>
		</li>
		<li>
			<a href="mailto:vinicios.falqueiro@gmail.com" target="blank"><AlternateEmailIcon/></a>
		</li>
		<li>
    <a href="tel:11-99340-8348"><PhoneIcon/></a>
		</li>
      </ul>
    </div>
  );
}
