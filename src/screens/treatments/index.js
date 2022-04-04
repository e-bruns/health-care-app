import MenuHeaderMain from "../_components/MenuHeaderMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import CardGlobal from "../_components/CardGlobal";
import { useEffect, useState } from "react";
import treatmentService from "../../services/treatment";
import { toast } from "react-toastify";

const TreatmentsScreen = () => {
  const [treatments, setTreatments] = useState([]);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    fetchTreatments();
  }, []);

  const fetchTreatments = async (searched = false) => {
    let pg = page;
    if (searched === true) {
      pg = 1;
    }
    try {
      const data = await treatmentService.index({ page: pg, q });
      if (data && data.length > 0) {
        if (pg === 1) {
          setTreatments(data);
        } else {
          setTreatments(treatments.concat(data));
        }
      }
    } catch (error) {
      toast.error("Falha ao carregar tratamentos");
    } finally {
      setPage(pg + 1);
    }
  };

  const renderList = () => {
    if (treatments.length === 0) {
      return (
        <>
          <div className="CardLast_Group">
            <div className="cardLast">
              <div className="text-center p-2">
                <div className="">
                  <div className="text-center" style={{
                      color: '#3C96D7',
                      fontWeight: 650
                  }}>
                    NENHUM TRATAMENTO CADASTRADO! <br />
                    Clique em " + " para adicionar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <div className="CardLast_Group">
        <InfiniteScroll
          dataLength={treatments.length}
          next={fetchTreatments}
          hasMore={true}
          loader={<h4 className="text-center text-white">Buscando...</h4>}
        >
          {treatments.map((treatment, index) => (
            <CardGlobal
              title={treatment.title}
              exam_location={treatment.treatment_location}
              date={treatment.date}
              link={"/treatment/" + treatment.id + "/detail"}
              key={index}
            ></CardGlobal>
          ))}
        </InfiniteScroll>
      </div>
    );
  };

  return (
    <>
      <MenuHeaderMain />
      <div className="position-button-new">
        <Link to="/treatment/new" className="btn btn-primary bottom">
          <h1> + </h1>
        </Link>
      </div>

      <div className="CardLast_Group">
        <div className="cardLast">
          <div className="cardLast__title text-center">Tratamentos</div>
          <div className="d-flex px-2 gap-1 justify-content-center mb-2">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="PESQUISAR"
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                fetchTreatments(true);
              }}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white"
              />
            </button>
          </div>
        </div>
      </div>

      {renderList()}
    </>
  );
};

export default TreatmentsScreen;
