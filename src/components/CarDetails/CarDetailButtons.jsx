import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import carBoughtGif from "../../assets/carBoughtGif.gif";
import testDriveGif from "../../assets/testDrive.gif";
import { useNavigate } from "react-router";

const CarDetailButtons = ({
  carData,
  handleOpenDialog,
  handleBookTestDrive,
  buyOpen,
  handleBuyClose,
  testOpen,
  handleTestClose,
}) => {
  const navigate = useNavigate();
  const handleOpenChats = () => {
    console.log(carData);
    navigate(`/chat/${carData.car.id}`);
  };
  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <Card variant="elevation" elevation={3}>
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              style={{
                marginRight: "10px",
              }}
              onClick={handleOpenDialog}
            >
              <Typography variant="body2">
                <strong>Buy Now</strong>
                <br />
                <sub>100% refund guarantee</sub>
              </Typography>
            </Button>
            <Button
              variant="contained"
              onClick={handleBookTestDrive}
              sx={{
                backgroundColor: "primary.light",
                height: "54px",
              }}
            >
              <Typography variant="body2">
                <strong>Free Test Drive</strong>
              </Typography>
            </Button>
          </div>
          <Button
            varaint="contained"
            onClick={handleOpenChats}
            sx={{
              backgroundColor: "secondary.main",
              color: "primary.contrastText",
              marginTop: "10px",
              height: "54px",
              width: 1,
            }}
          >
            <Typography variant="body2">
              <strong>Chat with owner</strong>
            </Typography>
          </Button>
        </CardContent>
        <Dialog open={buyOpen} keepMounted onClose={handleBuyClose}>
          <DialogContent>
            <center>
              <h4>Congratulation on your new car!</h4>
            </center>
            <img
              src={carBoughtGif}
              alt="congratulation"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </DialogContent>
        </Dialog>
        <Dialog
          open={testOpen}
          keepMounted
          onClose={handleTestClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <center>
              <h4>Your Test Drive has been booked!</h4>
            </center>
            <img
              src={testDriveGif}
              alt="congratulation"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </DialogContent>
        </Dialog>
      </Card>
    </div>
  );
};

export default CarDetailButtons;
