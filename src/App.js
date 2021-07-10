import React from "react";
import Header from "./Components/Header.jsx";
import TicketCreator from "./Components/TicketCreator.jsx";
import TicketTable from "./Components/TicketTable.jsx";

export default function App() {
  return (
    <>
      <Header />
      <TicketCreator />
      <TicketTable />
    </>
  );
}
