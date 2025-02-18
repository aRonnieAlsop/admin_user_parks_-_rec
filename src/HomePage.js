import React from "react";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Koyom Koyo Admin Dashboard</h1>
      <p style={styles.text}>Manage Koyom Koyo programs and events here.</p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#1A2421",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "3vw",
    marginBottom: "20px",
  },
  text: {
    fontSize: "2vw",
    maxWidth: "80%", 
  },
};

// media query for very small screens
const mobileStyles = `
  @media (max-width: 600px) {
    h1 {
      font-size: 20px !important;
    }
    p {
      font-size: 16px !important;
    }
  }
`;
// injected media query styles into the document
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(mobileStyles, styleSheet.cssRules.length);

export default HomePage;
