import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { Box } from "@mui/material";
import { AnimatedBackground } from "../animatedbackground/animatedbackground";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
      <Box position="absolute" width={"20%"} top={3030} right={1200}>
        <AnimatedBackground />
      </Box>
        <h2>Contatos</h2>
        <p>Sinta-se à vontade para entrar em contato!</p>
        
      </div>
      <ul className={styles.links}>
        <li className={styles.link}><img src={getImageUrl("contact/e-mail.png")} alt="Email icon" />
          alansilva2896@gmail.com
        </li>
        <li className={styles.link}>
          <a href="https://api.whatsapp.com/send/?phone=5511940094503&text&type=phone_number&app_absent=0"> 
          <img src={getImageUrl("contact/wp2.png")} alt="Whatsapp icon" /></a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/alan-nunes-7b3440273"> 
          <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon" /></a>
        </li>
        
        <li className={styles.link}>
          <a href="https://github.com/alangt22"> 
          <img src={getImageUrl("contact/git.png")} alt="Github icon" /></a>
        </li>

        <div className={styles.alan}>
          <img className={styles.direito} src={getImageUrl("contact/right.png")} alt="Direitos icon" />
          <a href="/">2024 Alan Nunes</a>
        </div>
        
         
        
      </ul>
    
      
    </footer>
   
    
    
    
  );
};
