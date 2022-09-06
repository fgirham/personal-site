import "./spinner.css";

export default function Spinner(props) {
  const { isVisible } = props;
  return isVisible ? (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  ) : (
    <></>
  );
}
