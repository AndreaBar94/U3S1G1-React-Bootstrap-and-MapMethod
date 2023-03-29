import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header logoPath={logo} />
		</div>
	);
}

export default App;
