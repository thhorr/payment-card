import "./App.css";
import Apple from "./components/Apple";
function App() {
  return (
      <Apple
        style={{ backgroundColor: "grey" }}
        date="28/10/2020"
        caseStudy="Case Study"
        gift="Apple Gift"
        pay="Pay"
        desktop="Desktop - Mobile"
        icon="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/758px-Apple_logo_black.svg.png"
        arrow="https://www.svgrepo.com/show/102957/arrow.svg"
      />
  );
}

export default App;
