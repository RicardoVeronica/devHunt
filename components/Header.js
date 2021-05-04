import Buscador from "./ui/Buscador";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>devHunt</p>
          <Buscador />
          {/* nav */}
        </div>
        <div>{/* menu de administracion */}</div>
      </div>
    </header>
  );
};

export default Header;
