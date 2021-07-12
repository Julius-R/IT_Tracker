import React from "react";
import {Link} from "react-router-dom"

export default function Ticket({ ticket }) {
  return (
    <tr>
      <td><Link to={`/ticket/${ticket.id}`}>{ticket.id}</Link></td>
      <td>{ticket.category}</td>
      <td>{ticket.description}</td>
      <td>{ticket.priority}</td>
      <td>{new Date(parseInt(ticket.datecreated)).toLocaleString()}</td>
    </tr>
  );
}
