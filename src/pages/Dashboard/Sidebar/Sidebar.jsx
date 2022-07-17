import React, { useState } from "react";
import { BsBasket } from "react-icons/bs";
import { AiOutlineDoubleLeft, AiOutlinePlusCircle } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { SidebarToggler, StyledLink, Wrapper } from "./Sidebar.style";
import Heading from "../../../components/Heading/Heading";
import Modal from "../../../Modal/Modal";
import Flexbox from "../../../components/Flexbox/Flexbox";
import useToggle from "../../../hooks/useToggle";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modal = useToggle();

  return (
    <Wrapper>
      <SidebarToggler isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineDoubleLeft />
      </SidebarToggler>
      {isOpen ? <Heading margin="10px">Admin</Heading> : <Heading>A</Heading>}
      <StyledLink to="/admin">
        <BsBasket />
        {isOpen && <Heading size="20px">Buyurtmalar</Heading>}
      </StyledLink>
      <StyledLink to="/admin/edit-products">
        <MdProductionQuantityLimits />
        {isOpen && <Heading size="20px">Mahsulotlar</Heading>}
      </StyledLink>
      <Flexbox
        justifyContent="flex-start"
        onClick={modal.open}
        flexDirection="row"
        style={{ cursor: "pointer", color: "white" }}
      >
        <AiOutlinePlusCircle style={{ fontSize: "25px" }} />
        {isOpen && (
          <Heading size="20px" margin="10px">
            Qo'shish
          </Heading>
        )}
      </Flexbox>
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        {/* <CreateProducts /> */}
      </Modal>
    </Wrapper>
  );
};

export default Sidebar;
