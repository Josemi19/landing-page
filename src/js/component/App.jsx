import React from "react";

import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";
import Jumbo from "./Jumbo.jsx";
import Navbar from "./Navbar.jsx";

//create your first component
const App = () => {
	return (
		<>
			<Navbar />
			<Jumbo />
			<Cards />
			<Footer />
		</>
	);
};

export default App;
