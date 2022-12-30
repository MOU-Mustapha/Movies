import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import logoImage from "../Images/logo.png";
import { getAllMoviesAction, getSearchAction } from "../Redux/actions/actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMoviesAction());
    } else {
      dispatch(getSearchAction(word));
    }
  };
  return (
    <div className="nav-style w100">
      <Container>
        <Row className="py-2">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logoImage} alt="" />
            </a>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa-solid fa-magnifying-glass position"></i>
              <input
                type="text"
                className="form-control"
                placeholder="بحث...."
                onChange={(e) => search(e.target.value)}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
