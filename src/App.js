import Main from "./pages/main/Main";
// import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;