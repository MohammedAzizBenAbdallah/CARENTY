import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Global/AppLayout";
import PageNotFound from "./PageNotFound";
import Home from "./Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to={"/home"} replace />} />
          <Route index path="/home" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
