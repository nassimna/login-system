import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../Actions/auth";
import { Button } from "@mui/material";
const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    localStorage.removeItem("profile");
    history.push("/login");
  };
  return (
    <div>
      {"Hello"}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          color: "white",
          backgroundColor: "#36C5F1",
        }}
        onClick={handleSubmit}
      >
        Logout
      </Button>
    </div>
  );
};
export default Home;
