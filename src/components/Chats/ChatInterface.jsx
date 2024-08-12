import Box from "@mui/material/Box";
import Header from "./Header";
import { ChatBox, Messages } from "./index";
import { useState } from "react";

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "primary.contrastText",
        flexGrow: 1,
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          mb: 1,
          overflowY: "scroll",
          flexGrow: 0.95,
        }}
      >
        <Messages displayMessage={displayMessage} />
      </Box>
      <ChatBox
        setMessage={setMessage}
        message={message}
        setDisplayMessage={setDisplayMessage}
        displayMessage={displayMessage}
      />
    </div>
  );
};

export default ChatInterface;
