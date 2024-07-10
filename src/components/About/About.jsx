import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Alann.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Full-Stack</h3>
              <p>
              Sou um estudante com habilidades em desenvolvimento Full Stack, focado em projetos pessoais. Tenho experiência em front-end utilizando JavaScript, HTML, CSS e React.js para criar interfaces interativas e responsivas. No back-end, estou me aprimorando em Node.js e Python com Django, desenvolvendo APIs e aplicações web.
Estou comprometido em aprender continuamente e em expandir minhas habilidades Full Stack para contribuir de forma eficaz em projetos desafiadores.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Formação</h3>
              <p>
                Cursando quarto semestre superior em Análise e Desenvolvimento de Sistemas (Universidade Cruzeiro do Sul) 
              </p>
            </div>
          </li>
        </ul>
      </div>
      
    </section>
  );
};
