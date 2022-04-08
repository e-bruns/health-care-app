import { useEffect, useState, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { toast } from "react-toastify";
import CardShare from "./cardShare";

const ShareList = ({ fetchService, tab }) => {
  const [shares, setShares] = useState([]);
  const pageRef = useRef(1)
  const [q, setQ] = useState();
  const [lastFetched, setLastFeteched] = useState([]);

  useEffect(() => {
    console.log(tab)
    setShares([])
    pageRef.current = 1; 
  }, [tab])

  useEffect(() => {
    fetchShares();
  }, [fetchService]);

  const fetchShares = async (searched = false) => {
    let pg =  pageRef.current;
    if (searched === true) {
      pg = 1;
    }
    try {
      const data = await fetchService.index({ page: pg, q });
      setLastFeteched(data);
      if (data && data.length > 0) {
        if (pg === 1) {
          setShares(data);
        } else {
          setShares(shares.concat(data));
        }
        pageRef.current = pg + 1;
      }
    } catch (error) {
      toast.error("Falha ao carregar tratamentos");
    } finally {
    }
  };

  return (
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <div className="p-2">
          <InfiniteScroll
            dataLength={shares.length}
            next={fetchShares}
            hasMore={true}
            loader={lastFetched.length === 0 ? "" : "Carregando.."}
          >
            <div className="p-2 flex-column gap-2 d-flex">
              {shares.map((share, index) => (
                <CardShare key={index} share={share} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </Col>
    </Row>
  );
};

export default ShareList;