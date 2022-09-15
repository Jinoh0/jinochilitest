import phoneLogo from "../../assets/images/icn-phone.png";
import sponsorLogo from "../../assets/images/logo-firstpage-t.png";
import chiliLogo from "../../assets/images/logo-chili_white@2x.png";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export function Navbar() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const flagBadges = ["PT", "ES", "US"];

  useEffect(() => {
    async function fetchCountries() {
      setIsLoading(true);
      console.log(isLoading);
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      console.log(response.data);
      setCountries(response.data);
      setIsLoading(false);
    }
    fetchCountries();
  }, []);

  console.log(isLoading);

  return (
    <>
      {isLoading === false && (
        <nav className={style.navbar}>
          <img src={chiliLogo} alt="chili logo" className={style.logo} />
          <img src={sponsorLogo} alt="first page" className={style.sponsor} />

          {flagBadges.forEach((currentCountryCode) => {
            countries
              .filter((cE) => {
                return cE.alpha2Code === currentCountryCode;
              })
              .map((country) => {
                console.log(country.alpha2Code);
                return (
                  <>
                    <img
                      src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                      alt="Flag"
                    />
                    <p>{country.alpha2Code}</p>
                  </>
                );
              });
          })}
          <div
            className={style.phoneLogo}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <img
              src={phoneLogo}
              alt="phone logo"
              style={{ height: "30px", marginRight: "10px" }}
            />
            <p>+55 11 98765-4321</p>
          </div>
        </nav>
      )}
    </>
  );
}
