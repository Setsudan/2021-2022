import { Component } from "react";
import Cat from "../img/ico/cat.svg";
import NavIco from "../img/ico/nav-menu.svg";
import { Link } from "react-router-dom";
class NotFound extends Component {
  render() {
    return (
      <div className="notfound-page">
        <Link className="NavBtn" to="/NavMenu">
          <img src={NavIco} alt="" />
        </Link>
        <div className="cat">
          <h1 className="fof">4</h1>
          <img src={Cat} alt="" />
          <h1 className="fof">4</h1>
        </div>
        <h1 className="page-title">Dayum bro watchu doin ?</h1>
        <h2 className="page-title">(it means you are lost dummy)</h2>
      </div>
    );
  }
}
export default NotFound;
