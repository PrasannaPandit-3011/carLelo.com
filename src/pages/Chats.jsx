import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import ChatInterface from "../components/Chats/ChatInterface";
import { carUser } from "../store/slice/chatSlice";
import { Sidebar } from "../components/Chats";

const Chats = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(carUser({ id: id }));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        height: "90vh",
        color: "primary.main",
      }}
    >
      <Sidebar />
      <ChatInterface />
    </Box>
  );
};

export default Chats;
