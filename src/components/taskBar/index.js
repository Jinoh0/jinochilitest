import style from './style.module.css'

export function Taskbar() {
  return (
    <>
      <select defaultValue={"SEO"} className={style.taskbar}>
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


      
    </>
  );
}
