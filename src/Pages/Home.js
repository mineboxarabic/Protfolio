
import {Header} from "../Objects/Header";
import {Footer} from "../Objects/Header";

import styled from "styled-components";
import React, { useEffect } from "react";
import { useState } from "react";
import ClickMe from "../Objects/ClickMe";
import { isMouseOverAComboBox , colorPalette } from '../Objects/Context';
import { useContext } from "react";
import * as Sections from "../Objects/Sections";

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



function Home() {
   const isMouseOverAComboBoxContext = useContext(isMouseOverAComboBox);
   const [isMouseOverAComboBoxState, setIsMouseOverAComboBoxState] = useState(isMouseOverAComboBoxContext);
   console.log(isMouseOverAComboBoxState);

  return (
   <isMouseOverAComboBox.Provider value={{isMouseOverAComboBoxState,setIsMouseOverAComboBoxState}}>
   <App>
      <Header PageNumber={1} />
      
      <div className="Home">
            <ClickMe isShowen={isMouseOverAComboBoxState} />
            <Sections.HomeBackgrounSection/>
            <Sections.SkillsSection />
            <Sections.AcademicLifeSection />
            <Sections.ContactSection />
      </div>
      <div className="Margin"></div>
      <Footer />
   </App>
   </isMouseOverAComboBox.Provider>

  );
}

export default Home;
