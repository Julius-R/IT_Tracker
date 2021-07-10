import React, { useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header.jsx";
import TicketCreator from "./Components/TicketCreator.jsx";
import TicketTable from "./Components/TicketTable.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addTicket } from "./redux/reducers/ticketSlice";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("http://localhost:3001/api").then((res) => {
      res.data.forEach((ticket) => {
        dispatch(addTicket(ticket));
      });
    });
  }, []);
  return (
    <>
      <Header />
      <TicketCreator />
      <TicketTable />
    </>
  );
}
