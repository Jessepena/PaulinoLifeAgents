import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import AilPlus from "./Components/AilPlus/Ailplus";
import ChildSafeKit from "./Components/ChildSafeKit/ChildSafeKit";
import FreeWillKit from "./Components/FreeWillKit/FreeWillKit";
// import Medfacts from "./Components/Medfacts/Medfacts";
import Home from "./Components/Home/Home";
import Footer from "../src/Components/Footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/Home" element={<Home />} />
				<Route path="/AilPlus" element={<AilPlus />} />
				<Route path="/ChildSafeKit" element={<ChildSafeKit />} />
				<Route path="/FreeWillKit" element={<FreeWillKit />} />
				{/* <Route path="/Medfacts" element={<Medfacts />} /> */}
				<Route path="*" element={<Navigate to="/Home" />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
