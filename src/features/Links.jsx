import React from "react";
const Links = () => {
  const links = [
    { id: "btn__zuri", link: "https://training.zuri.team/", name: "Zuri Team" },
    {
      id: "books",
      link: "http://books.zuri.team/",
      name: "Zuri Books",
      subtext: "checkout out collection of books on design and coding",
    },
    {
      id: "book__python",
      link: `https://books.zuri.team/python-for-beginners?ref_id=kathalysth`,
      subtext:
        "new to programming? check out our concise python for beginners books, thank me later!",
      name: "Python Books",
    },
    {
      id: "pitch",
      link: "https://background.zuri.team",
      name: "Background Check for Coders",
      subtext:
        "run effective background check on your coders. Click here, get started",
    },
    {
      id: "book__design",
      link: "https://books.zuri.team/design-rules",
      subtext: "Want to explore the ABC of good design? get started!",
      name: "Design Book",
    },
  ];
  //**Renders links */
  const renderLinks = (links) => {
    return links.map((link, index) => (
      <li key={`${link.id}-${index}`} className="mt-4">
        <a href={link.link} id={link.id} target="_blank">
          <span className="fw-bolder">{link.name}</span>
          {link.subtext && <small>{link.subtext}</small>}
        </a>
      </li>
    ));
  };

  return (
    <section className="app-links">
      <ul className="list-unstyled ">
        {renderLinks(links)}
        <li className="mt-4">
          <a href="/contact" id="contact">
            <span className="fw-bolder">Contact Me</span>
            <small>Get In Touch!</small>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Links;
