import React, {useState} from 'react';
import MenuHeaderMain from '../_components/MenuHeaderMain';
import ModalGlobal from '../_components/ModalGlobal';

function HomeScreen() {

  return <div>
    <MenuHeaderMain/>



    <ModalGlobal title="Deseja excluir mesmo?" id="3"><h1>Excluir</h1></ModalGlobal>
  </div>
}

export default HomeScreen;
