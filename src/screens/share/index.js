import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import sharedWithMeService from "../../services/sharedMe";
import userShareService from "../../services/userShare";
import MenuHeaderMain from "../_components/MenuHeaderMain";
import { Link } from 'react-router-dom'

import "./share.css";
import ShareList from "./shareList";

const TabShare = ({ onTabSelected }) => {
  const [active, setActive] = useState(1);

  const handleActiveTab = (indexTab) => {
    setActive(indexTab);
    onTabSelected(indexTab);
  };

  return (
    <div className="Tab px-2">
      <div
        className={active === 1 ? "Tab-item active" : "Tab-item"}
        onClick={() => handleActiveTab(1)}
      >
        MEUS COMPARTILHAMENTOS
      </div>
      <div
        className={active === 2 ? "Tab-item active" : "Tab-item"}
        onClick={() => handleActiveTab(2)}
      >
        COMPARTILHADOS COMIGO
      </div>
    </div>
  );
};

const ShareScreen = () => {
  const [tab, setTab] = useState(1);

  const renderList = () => {
    if (tab === 1) {
      return <ShareList fetchService={userShareService} tab={tab} />;
    } else {
      return <ShareList fetchService={sharedWithMeService} tab={tab} />;
    }
  };

  return (
    <div>
      <MenuHeaderMain />

      <div className="position-button-new">
        <Link to="/share/new" className="btn btn-primary rounded-circle">
          <h1>
            <FaPlus />
          </h1>
        </Link>
      </div>

      <TabShare onTabSelected={(tabIndex) => setTab(tabIndex)} />

      {renderList()}
    </div>
  );
};

export default ShareScreen;
