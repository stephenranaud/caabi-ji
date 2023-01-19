import Button from "../../components/Buttons/Button";
import "./MainHeader.css";

export default function MainHeader() {
  return (
    <header className="header-main container">
      <div id="logo">
        <span>CAABI</span>
        <span>JI</span>
      </div>

      <div className="search">
        <div className="group-control">
          <input className="search__input" type="text" placeholder="Location" />
          <input className="search__input" type="text" placeholder="Poste" />
          <Button type="button" className="btn-primary">
            Chercher
          </Button>
        </div>
      </div>
    </header>
  );
}
