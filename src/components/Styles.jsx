
export const styles = {
  card: {
    width: "100%",
    margin: "0 auto",
    marginBottom: "20px",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
  },
  cardHeader: {
    fontSize: "1.5em",
    fontWeight: "bold",
    textAlign: "center",
  },
  cardBody: {
    fontSize: "1.2em",
    textAlign: "center",
  },
  cardFooter: {
    fontSize: "1.2em",
    textAlign: "center",
  },
  button: {
    margin: "0 auto",
    marginBottom: "20px",
  },
};


// responsive cards
export const cardsStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridGap: "10px",
    margin: "0 auto",
    marginBottom: "20px",
}
