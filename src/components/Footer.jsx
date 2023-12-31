import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="static bg-primary-black left-0 right-0 top-2 z-40 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none flex items-center justify-between border-t pt-14">
          <div>
            <div>2023 Morrow Manor Photography</div>
          </div>

          <div className="flex items-center">
            <a href="https://www.instagram.com/morrowmanorphoto" rel="noreferrer" target="_blank">
              <FaInstagram className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
