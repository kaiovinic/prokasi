import styles from "./Home.module.css";
import savings from "../../img/savings.svg";
import LinkBuntton from "../layout/LinkButton";

function Home() {
  return (
    <section className={styles.home}>
      <h1>
        bem-vindo! ao <span>Prokasi</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkBuntton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt="Prokasi" />
    </section>
  );
}

export default Home;
