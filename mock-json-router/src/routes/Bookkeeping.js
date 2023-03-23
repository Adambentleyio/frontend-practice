import React from "react";
import { Link, Outlet } from "react-router-dom";

const Bookkeeping = () => {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/bookkeeping/invoices">Invoices</Link> |{" "}
        <Link to="/bookkeeping/expenses">Expenses</Link>
        <Link to="/bookkeeping/invoices/add-new">Add Invoice</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Bookkeeping;
