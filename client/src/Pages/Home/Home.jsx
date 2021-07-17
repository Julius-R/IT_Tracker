import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import Header from "../../Components/Header.jsx";
import TicketCreator from "../../Components/TicketCreator.jsx";
import TicketTable from "./TicketTable.jsx";

import { addTicket, clearTickets } from "../../redux/reducers/ticketSlice";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearTickets());
    axios.get("http://localhost:3001/api").then((res) => {
      res.data.forEach((ticket) => {
        dispatch(addTicket(ticket));
      });
    });
  }, []);
  return (
    <>
      <Header showButton="false" />
      <TicketCreator />
      <TicketTable />
    </>
  );
}
