import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Users from "./components/Users";
import Home from "./components/Home";
import ClickMe from "./components/ClickMe";
import ClickCounter from "./components/ClickCounter";
import Invoices from "./routes/Invoices";
import Invoice from "./routes/Invoice";
import Expenses from "./routes/Expenses";
import Bookkeeping from "./routes/Bookkeeping";
import AddInvoice from "./routes/AddInvoice";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div
            className="flex content center"
            style={{ gap: "var(--spacing-s" }}
          >
            <Link to="/">Home</Link>
            <Link to="/click-me">User Click</Link>
            <Link to="/click-counter">Click Counter</Link>
            <Link to="/bookkeeping/invoices">Bookkeeper</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="click-me" element={<ClickMe />} />
          <Route path="click-counter" element={<ClickCounter />} />
          <Route path="/users/:id" exact element={<Users />} />
          <Route path="/bookkeeping" element={<Bookkeeping />}>
            <Route path="invoices" element={<Invoices />}>
              <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Select an invoice</p>
                  </main>
                }
              />
              <Route path=":invoiceId" element={<Invoice />} />
            </Route>
            <Route path="invoices/add-new" element={<AddInvoice />} />
            <Route path="expenses" element={<Expenses />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
