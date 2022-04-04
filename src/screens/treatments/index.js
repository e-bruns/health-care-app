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

  useEffect(() => {
    fetchTreatments();
  }, []);

  const fetchTreatments = async () => {
    try {
      const data = await treatmentService.index({ page, search: "" });
      if (data && data.length > 0) {
        if (page === 1) {
          setTreatments(data);
        } else {
          console.log(treatments, data);
          setTreatments(treatments.concat(data));
        }
      }
    } catch (error) {
      toast.error('Falha ao carregar tratamentos');
    } finally {
      setPage(page + 1);
    }
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
          <div className="cardLast__block_line">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="PESQUISAR"
              />
            </div>
            <div className="cardLast__button">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>

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
              link={'/treatment/' + treatment.id + '/detail'}
              key={index}
            ></CardGlobal>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default TreatmentsScreen;
