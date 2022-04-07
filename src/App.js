import DisplayChart from "./DisplayChart";
import Header from "./components/Header/Header";
import Home from "./routes/Home";
// import Upload from "./Upload";
const App = () => {
  return (
    <>
      <Header />
      <DisplayChart />
      <Home />
      {/* <Upload /> */}
    </>
  );
};
export default App;
