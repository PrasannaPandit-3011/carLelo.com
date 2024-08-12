import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

const ChatBox = ({
  message,
  setMessage,
  setDisplayMessage,
  displayMessage,
}) => {
  const handleSend = () => {
    if (message.trim() !== "") {
      setDisplayMessage([
        ...displayMessage,
        { message: message, time: new Date().toLocaleTimeString() },
      ]);
      setMessage("");
    }
  };
  return (
    <TextField
      autoFocus
      id="outlined-basic"
      label="Write here"
      variant="outlined"
      value={message}
      onKeyDown={(e) => e.key === "Enter" && handleSend()}
      onChange={(e) => setMessage(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSend}>
              <SendIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        mt: 1,
        mx: 1,
      }}
    />
  );
};

export default ChatBox;
