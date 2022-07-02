import React, { useState } from "react";
import { SidebarToggler, StyledLink, Wrapper } from "./Sidebar.style";
import IconToogler from "../../../assets/img/icon-sidebar.svg";
import Text from "../../../components/Text/Text";
import { FaUsers } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <Wrapper>
      <SidebarToggler isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <img src={IconToogler} alt="icon" />
      </SidebarToggler>
      {isOpen ? <h1 style={{ color: "white" }}>Admin</h1> : <h1>A</h1>}
      <StyledLink>
        <FaUsers />
        {isOpen && <Text>Ovqatlar</Text>}
      </StyledLink>
      <StyledLink>
        <BiMessageAltDetail />
        {isOpen && <Text>Xabarlar</Text>}
      </StyledLink>
    </Wrapper>
  );
}

export default Sidebar;
