import { logo } from "../assets";

const openGitHub = () =>
  window.open("https://github.com/Akshay-Katariya/SummaryAI");

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button type="button" className="black_btn" onClick={openGitHub}>
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Article with <br className="max-md:hidden" />
        <span className="orange_gradient"> OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Elevate your reading experience with SummaryAI a open-source article
        summarizer. Unlock the power to turn lengthy articles into engaging and
        concise summaries, making information accessible at a glance.
      </h2>
    </header>
  );
};

export default Hero;
