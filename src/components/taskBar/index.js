import style from "./style.module.css";

export function Taskbar() {
  return (
    <div className={style.taskbar}>
      <select defaultValue={"SEO"} className={style.select} id={style.a}>
        <option>SEO</option>
        <option>SEO POWERED BY SENTR</option>
        <option>GARANTIA DE TRÁFEGO</option>
        <option>SEO LOCAL</option>
        <option>SEO INTERNACIONAL</option>
        <option>SEO PARA ECOMMERCE</option>
        <option>RANQUEAMENTO PERDIDOS</option>
        <option>SEO MOBILE</option>
        <option>SEO POR VOZ</option>
      </select>

      <select defaultValue={"GOOGLE ADS"} className={style.select} id={style.b}>
        <option>GOOGLE ADS</option>
        <option>GOOGLE SEARCH ADS</option>
        <option>GOOGLE DISPLAY ADS</option>
        <option>GOOGLE REMARKETING</option>
        <option>GOOGLE SHOPPING</option>
        <option>GOOGLE DYNAMICS ADS</option>
        <option>WAZE ADS</option>
        <option>YOUTUBE ADS</option>
        <option>UNIVERSAL ADS</option>
      </select>

      <select defaultValue={"SOCIAL ADS"} className={style.select} id={style.c}>
        <option>SOCIAL ADS</option>
        <option>INSTAGRAM ADS</option>
        <option>PINTEREST ADS</option>
        <option>TWITTER ADS</option>
        <option>SNAPCHAT ADS</option>
        <option>TIKTOK ADS</option>
        <option>LINKEDIN ADS</option>
      </select>

      <select defaultValue={"OUTROS SERVIÇOS"} className={style.select} id={style.d}>
        <option>PUBLICIDADE PROGRAMÁTICA</option>
        <option>ANÚNCIOS DE BANNER NATIVOS</option>
        <option>LANDING PAGES</option>
      </select>

      <select defaultValue={"FERRAMENTAS GRÁTIS"} className={style.select} id={style.e}>
        <option>FERRAMENTAS GRÁTIS</option>
        <option>AUDITORIA SEO GRÁTIS</option>
        <option>CALCULADORA ROI PARA SEO</option>
        <option>CALCULADORA ROI PARA ANÚNCIOS</option>
        <option>CALCULADORA SEO X SEM</option>
        <option>CONSULTORIA GRÁTIS</option>
      </select>

      <select defaultValue={"SOBRE NÓS"} className={style.select} id={style.f}>
        <option>QUEM SOMOS</option>
        <option>NOSSOS SERVIÇOS</option>
        <option>CARREIRAS</option>
        <option>CASE STUDIES</option>
        <option>BLOG</option>
      </select>

      <p className={style.contact}>CONTATO</p>

      <button className={style.btn}>RECEBA UMA PROPOSTA</button>
    </div>
  );
}
