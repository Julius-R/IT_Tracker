import React from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Ticket from "./Ticket.jsx";

export default function TicketTable() {
  const tickets = useSelector((state) => state.tickets);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Ticket #</th>
          <th>Category</th>
          <th>Description</th>
          <th>Priority</th>

          <th>Date Created</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </tbody>
    </Table>
  );
}
