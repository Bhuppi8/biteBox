const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="about" className="border-t border-slate-200 bg-white">
      <div
        id="contact"
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-sm text-slate-500 sm:flex-row sm:px-6 sm:text-left lg:px-8"
      >
        <p>
          Made with <span className="font-semibold text-orange-600">care</span>{" "}
          by{" "}
          <a
            className="font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-orange-700"
            href="https://www.linkedin.com/in/chetannada/"
            target="_blank"
            rel="noreferrer"
          >
            Bhupender
          </a>
        </p>
        <p>© {year} BiteBox</p>
      </div>
    </footer>
  );
};

export default Footer;
