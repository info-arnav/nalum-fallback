import Link from "next/link";
import Notifications from "./notifications";

export default function Navigation() {
  return (
    <nav>
      <div className="links">
        <Link href="/" className="link">
          Home
        </Link>
        <Link href="/about" className="link">
          About
        </Link>
        <Link href="/contact-us" className="link">
          Contact
        </Link>
      </div>
      <Notifications
        messages={[
          { title: "Maintanance Break", message: "A fun update is on its way" },
        ]}
      ></Notifications>
    </nav>
  );
}
