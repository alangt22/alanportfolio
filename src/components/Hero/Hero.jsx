import React from "react";
import { AnimatedBackground } from "../animatedbackground/animatedbackground";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Box } from "@mui/material";


export const Hero = () => {
  return (
    <section className={styles.container}>
      
      <Box position="absolute" width={"100%"} top={-100} right={5}>
        <AnimatedBackground />
      </Box>
      <div className={styles.content}>
        
        <h1 className={styles.title}>Olá, sou Alan Nunes</h1>
        <p className={styles.description}>
          Desenvolvedor Full-Stack
        </p>
        <a href="https://api.whatsapp.com/send/?phone=5511940094503&text&type=phone_number&app_absent=0" className={styles.contactBtn}>
          Contate-me
        </a>
        <a href="https://drive.google.com/file/d/1DEGfBn_6lKgg2kB_sJGHCPgi4hPOMj5y/view" className={styles.contactBtn}>
          Curriculo PDF
        </a>
      </div>
     
      <img
        src={getImageUrl("hero/logo.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
