import React from "react";

export default function Ticket({ ticket }) {
  return (
    <tr>
      <td>{ticket.id}</td>
      <td>{ticket.category}</td>
      <td>{ticket.description}</td>
      <td>{ticket.priority}</td>
      <td>{new Date(parseInt(ticket.datecreated)).toLocaleString()}</td>
    </tr>
  );
}
