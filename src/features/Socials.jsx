import slack from "../assets/slack.svg";
import github from "../assets/github.svg";

const Socials = () => {
  return (
    <section className="d-flex justify-content-center ">
      <a href="https://www.slack.com" target={"_blank"}>
        <img src={slack} width={30} height={30} />
      </a>
      <a
        href="https://www.github.com/kathalysth"
        target={"_blank"}
        className="ms-4"
      >
        <img src={github} width={30} height={30} />
      </a>
    </section>
  );
};

export default Socials;