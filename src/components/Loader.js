import Spinner from "../images/200.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={Spinner} alt="Fetching" srcset="" />
      <h1>Fetching Data</h1>
    </div>
  );
};

export default Loader;
