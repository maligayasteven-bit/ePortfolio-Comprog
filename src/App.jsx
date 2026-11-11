import { useState } from "react";
import Navbar from "./sections/Navbar/Navbar";
import LandingPage from "./sections/LandingPage/LandingPage";
import TasksPage from "./sections/TasksPage/TasksPage";
import Footer from "./sections/Footer/Footer";

export default function App() {
  const [page, setPage] = useState("overview");
  return (
    <div className="ep">
      <Navbar page={page} setPage={setPage} />
      {page === "overview" ? <LandingPage /> : <TasksPage />}
      <Footer />
    </div>
  );
}
