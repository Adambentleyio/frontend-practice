import React from "react";
import { getInvoice, deleteInvoice } from "../data";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Invoice = () => {
  let params = useParams();
  let location = useLocation();
  let navigate = useNavigate();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main
      style={{
        flexBasis: "100%",
        padding: "1rem",
      }}
    >
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <button
        onClick={() => {
          deleteInvoice(invoice.number);
          navigate("/invoices" + location.search);
        }}
      >
        Delete
      </button>
    </main>
  );
};

export default Invoice;
