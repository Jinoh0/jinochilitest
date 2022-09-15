import hero from "../../assets/images/guaranteed-results-hero.png";
import logos from "../../assets/images/logos@2x.png";
import style from "./style.module.css";

export function Body() {
  return (
    <>
      <main style={{ display: "flex", marginTop: "100px" }}>
        <div className={style.textBody}>
          <section>
            <h1>
              Sem mais desculpas, Marketing existe para aumentar suas vendas e
              estamos aqui para fazer justamente isso!
            </h1>
          </section>

          <p style={{ marginTop: "25px" }}>
            Seu parceiro de marketing digital completo na América Latina.
          </p>

          <img
            src={logos}
            alt="logos"
            style={{ width: "100%", marginTop: "45px" }}
          />
        </div>

        <img src={hero} alt="hero" />
      </main>
    </>
  );
}
