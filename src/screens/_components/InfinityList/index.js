import { useEffect, useState, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { toast } from "react-toastify";

const InfinityList = ({ fetchService, renderResource, search, parameter }) => {
  const [resources, setResource] = useState([]);
  const pageRef = useRef(1);
  const [q, setQ] = useState(search);
  const [lastFetched, setLastFetched] = useState([]);

  useEffect(() => {
    setQ(search);
    setResource([]);
    pageRef.current = 1;
    fetchShares();
  }, [search]);

  useEffect(() => {
    fetchShares();
  }, []);

  const fetchShares = async (searched = false) => {
    let pg = pageRef.current;
    if (searched === true) {
      pg = 1;
    }
    try {
      const data = await fetchService.index({ page: pg, q: search, parameter });
      setLastFetched(data);
      if (data && data.length > 0) {
        if (pg === 1) {
          setResource(data);
        } else {
          setResource(resources.concat(data));
        }
        pageRef.current = pg + 1;
      }
    } catch (error) {
      toast.error("Falha ao carregar recurso");
    } finally {
    }
  };

  return (
    <InfiniteScroll
      dataLength={resources.length}
      next={fetchShares}
      hasMore={true}
      loader={
        lastFetched.length === 0 || pageRef.current === 1 ? "" : ""
      }
    >
      <Row className="m-1">
        {resources.map((resource, index) => (
          <Col md={4} xs={12} key={index}>
            {renderResource(resource)}
          </Col>
        ))}
      </Row>
    </InfiniteScroll>
  );
};

export default InfinityList;
