import Spinner from "react-bootstrap/esm/Spinner";

const Loader = () => {
  return (
    <div className="loader">
        <Spinner animation="grow" variant="info" className="loader-spinner"/>;
    </div>
  )
}

export default Loader