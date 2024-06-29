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
              <h3>Desenvolvedor Front-End</h3>
              <p>
              Sou um desenvolvedor front-end que cria soluções responsivas e
                sites otimizados com experiência em projetos pessoais 
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
