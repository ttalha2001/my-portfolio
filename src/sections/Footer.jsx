import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="select-none flex flex-wrap items-center justify-between gap-5 pb-3 mb-7 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} target="_blank">
            <img src={social.icon} className="w-5 h-5 transition-transform duration-100 hover:scale-110" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2025 TT. All rights reserved.</p>
    </section>
  );
};

export default Footer;
