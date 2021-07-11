import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { toggleModal } from "../redux/reducers/modalSlice";

export default function Header({ showButton }) {
  const dispatch = useDispatch();
  return (
    <nav className="nav">
      <p className="nav-title">IT Tracker</p>
      {showButton ? (
        <Button variant="info" onClick={() => dispatch(toggleModal())}>
          Create Ticket
        </Button>
      ) : null}
    </nav>
  );
}
