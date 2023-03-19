
import {Header} from "../Objects/Header";
import {Footer} from "../Objects/Header";

import styled from "styled-components";
import React, { useEffect } from "react";
import { isMouseOverAComboBox , colorPalette } from '../Objects/Context';
import { GalleryImages } from "../Objects/GalleryImages";


import '../Styles/Home.scss';
/**
 * The color pallet of this website is:
 * #00d646 : green
 * #2f2e2e : dark grey
 * #333b50 : dark blue
 */
const App = styled.div`
   background-color: ${colorPalette.darkBlue};
   color: #fff;
   padding: 0;
   margin: 0;
`;



function Designs() {


  return (
   
   <App>
      <Header PageNumber={4} />
        <GalleryImages />
      <div className="Margin"></div>
      <Footer />
   </App>


  );
}

export default Designs;
