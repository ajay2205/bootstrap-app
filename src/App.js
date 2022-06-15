import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./AppComponents/MyNavbar.js";
import MyHeader from "./AppComponents/MyHeader.js";
import MyCard from "./AppComponents/MyCard.js";

function App() {
  return (
    <div>
      <MyNavbar />
      <MyHeader />
      <MyCard />
    </div>
  );
}

export default App;
