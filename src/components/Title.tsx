import biteboxLogo from "../assets/bitebox_logo.svg";

const Title = () => (
  <a
    className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
    href="#home"
    aria-label="BiteBox home"
  >
    <img className="h-11 w-auto sm:h-12" src={biteboxLogo} alt="BiteBox" />
  </a>
);

export default Title;
