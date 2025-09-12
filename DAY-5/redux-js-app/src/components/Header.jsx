import { AuthContextProvider } from "../context/auth.context";
import Auth from "./Auth";
import MiniCart from "./MiniCart";

function Header() {
  return (
    <header className="header">
      Header
      <section className="header-user-area">
        <MiniCart />
        <AuthContextProvider>
          <Auth />
        </AuthContextProvider>
      </section>
    </header>
  );
}

export default Header;
