import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../redux/reducers/modalSlice";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <nav className="nav">
      <p className="nav-title">IT Tracker</p>
      <Button variant="info" onClick={() => dispatch(toggleModal())}>
        Create Ticket
      </Button>
    </nav>
  );
}
