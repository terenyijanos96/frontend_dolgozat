import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "../api/axios";
import Kerdes from "../components/TesztKerdes";

export default function Fooldal() {
  const [kerdesLista, setKerdesLista] = useState([]);
  const [kategoriaId, setKategoriaId] = useState(1);
  const [kategoriaLista, setKategoriaLista] = useState([]);

  async function tesztLekeres(id) {
    try {
      const response = await axios.get(`api/tesztek/kategoria/${id}`);
      console.log(response.data);
      setKerdesLista(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function kategoriaLekeres() {
    try {
      const response = await axios.get("api/kategoria");
      console.log(response.data);
      setKategoriaLista(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    tesztLekeres(kategoriaId);
    kategoriaLekeres();
  }, [kategoriaId]);

  function selectValtas(event) {
    setKategoriaId(event.target.value);
    console.log(kategoriaId)
  }

  return (
    <>
      <article className="p-lg-5 bg-light">
        <Container fluid style={{ backgroundColor: "white" }}>
          <select name="kategoriak" id="kategoriak" onChange={selectValtas}>
            {kategoriaLista.map((value, index) => {
              return (
                <option key={index} value={value.id}>
                  {value.kategorianev}
                </option>
              );
            })}
          </select>

          {kerdesLista.map((value, index) => {
            return <Kerdes obj={value} key={index} />;
          })}
        </Container>
      </article>
    </>
  );
}
