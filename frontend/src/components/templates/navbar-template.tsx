import Navbar from "../organisms/navbar";
import menu_items from "@/data/navbar-menu.json";

export default function NavbarTemplate() {
  return <Navbar data={menu_items.menu_items} />;
}
