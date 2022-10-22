import "./App.css";
import Avatar from "@mui/material/Avatar";
import Avg from "./girl.jpg";

function App() {
  return (
    <div className="App">
      <div className="profile">
        <Avatar
          className="profile_img"
          alt="Remy Sharp"
          src={Avg}
          sx={{ width: 72, height: 72 }}
        />
      </div>
      <p className="profile_name">Annette Black</p>
    </div>
  );
}

export default App;
