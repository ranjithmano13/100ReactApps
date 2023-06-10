import { useState } from "react";

export default function ProjectContainer(props) {
  const [pstyle, setPstyle] = useState({
    display: "none",
  });
  const showP = () => {
    setPstyle({
      display: "block",
      backdropFilter: "blur(15px)",
      animation: "slide-in 0.3s  forwards alternate",
    });

  };

  const hideP = () =>
    setPstyle({
      display: "none",
    });
  return (
    <li>
      <article className="app-card" onMouseEnter={showP} onMouseLeave={hideP}>
        <header>
          <img src={props.src} alt={props.name} />
          <h1>{props.name}</h1>
        </header>
        <main>
          <p style={pstyle}>{props.description} </p>
        </main>
        <div>
          <a
            href={props.giturl}
            target="_blank"
          >
            <i className="fa-brands fa-github fa-lg"></i>
          </a>
          <a
            href={props.projectLink}
            target="_blank"
          >
            <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
          </a>
        </div>
      </article>
    </li>
  );
}
