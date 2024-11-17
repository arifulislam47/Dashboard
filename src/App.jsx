import React from "react";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Components/Root";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Wallets from "./pages/Wallets";
import Summary from "./pages/Summary";
import Accounts from "./pages/Accounts";
import Settings from "./pages/Settings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Expenses />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/wallets" element={<Wallets />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/account" element={<Accounts />} />
      <Route path="/settings" element={<Settings />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
};

export default App;
