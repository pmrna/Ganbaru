import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <main className="w-screen h-screen">
        <Home />
      </main>
    </>
  );
}

export default App;
