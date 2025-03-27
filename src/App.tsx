import "./App.css";
import Modal from "./components/Modal";
import union from "@/assets/Union@2x.svg";
function App() {
  return (
    <div className="relative w-full h-screen">
      <section className="absolute inset-0 m-auto w-fit h-fit flex items-center justify-center flex-col">
        <div className="flex justify-center items-center mb-16">
          <img src={union} alt="union" />
        </div>
        <Modal />
      </section>
    </div>
  );
}

export default App;
