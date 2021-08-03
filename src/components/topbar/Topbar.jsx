import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            vfr.
          </a>
          <div className="itemContainer">

            <WhatsAppIcon className="icon" />
            <span className="callMe"><a href="https://api.whatsapp.com/send?phone=5511993408348&text=Ol%C3%A1!%20Tudo%20bem%3F" target="_blank" >+55 11 99340-8348</a></span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span className="emailSend"><a href="mailto:vinicios.falqueiro@gmail.com">vinicios.falqueiro</a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
