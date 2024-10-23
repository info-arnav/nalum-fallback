import NsutLogo from "@/components/static/nsut-logo.png";
import LinkedinIcon from "@/components/static/linkedin-icon.png";
import InstagramIcon from "@/components/static/instagram-icon.webp";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <Link href="/">
          <Image src={NsutLogo} height={50}></Image>
        </Link>
      </div>
      <div className="row">
        <Link href="mailto:admin@alumninet.in">admin@alumninet.in</Link>
      </div>
      <div className="row">
        <a className="icons" href="https://www.instagram.com/nalum.nsut/">
          <Image src={InstagramIcon} height={20} width={20}></Image>
        </a>
        <a
          className="icons"
          href="https://www.linkedin.com/company/alumninet-in/"
        >
          <Image src={LinkedinIcon} height={30} width={30}></Image>
        </a>
      </div>
    </footer>
  );
}
