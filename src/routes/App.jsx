import { Route, Routes } from "react-router-dom";
import { HomeView } from "../components/views/HomeView";
import { NotFound } from "../components/views/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
