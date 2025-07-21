// import { NavLink, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { useNavigate, useRouteError, isRouteErrorResponse } from "react-router-dom";

export const ErrorHandle = () => {
  const error = useRouteError();
  console.error("Routing Error:", error);

  const navigate = useNavigate();

  const handleNav=()=>{
    navigate(-1);
    // navigate("/");
  }

  const getErrorMessage = () => {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
      return error.message;
    } else {
      return "An unexpected error occurred.";
    }
  };

  return (
    <div style={styles.container}>
      <img
        src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
        alt="Error GIF"
        style={styles.gif}
      />
      <h1 style={styles.title}>Oops! Something went wrong.</h1>
      <p style={styles.message}>Sorry, we couldn't load this page.</p>
      <p style={styles.errorInfo}>{getErrorMessage()}</p>
      {/* <NavLink to="/" style={styles.link}>
        <button style={styles.button}>⬅ Back to Home</button>
      </NavLink> */}

        <button onClick={handleNav} style={styles.button}>⬅ Back to Home</button>

    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  gif: {
    width: "300px",
    maxWidth: "100%",
    marginBottom: "1rem",
    borderRadius: "12px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  message: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  errorInfo: {
    fontSize: "1rem",
    color: "crimson",
    marginBottom: "1.5rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  link: {
    textDecoration: "none",
  },
};
