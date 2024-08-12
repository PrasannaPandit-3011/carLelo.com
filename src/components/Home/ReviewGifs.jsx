import Divider from "@mui/material/Divider";
import fiveStar from "../../assets/fiveStar.gif";
import driving from "../../assets/driving.gif";
import hi from "../../assets/hi.gif";
import peace from "../../assets/peace.gif";
import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";
import { Box, Card, CardContent, CardActions, Typography } from "@mui/material";

const data = [
  {
    src: fiveStar,
    title: "4.6/5",
    body: "Our average review rating on Google and on Social platforms",
  },
  {
    src: peace,
    title: "35%",
    body: "The number of Spinny customers that are referrals",
  },
  {
    src: driving,
    title: ">70%",
    body: "People who've become customers after their first test drive",
  },
  {
    src: hi,
    title: "32%",
    body: "Our women customer quotient",
  },
];

const ReviewGifs = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <Divider
        variant="middle"
        orientation="horizontal"
        sx={{
          width: 0.7,
          fontSize: "x-large",
          mt: 12,
          px: 2,
          color: darkMode ? "primary.main" : "primary.dark",
        }}
      >
        Insights that drives us
      </Divider>
      <Box
        sx={{
          height: { lg: "300px", md: "400px" },
          width: { lg: "1200px", md: "800px" },
          display: "flex",
          borderRadius: "20px",
          margin: "30px 0px",
        }}
      >
        {data.map((e, i) => (
          <Card
            key={i}
            variant="outlined"
            sx={{
              backgroundColor: "#9191FF",
              ml: 1,
              width: "1",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  mb: 10,
                }}
              >
                <img
                  src={e.src}
                  alt=""
                  style={{
                    width: "130px",
                    height: "130px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    mx: 1,
                    mt: 2,
                  }}
                >
                  <Typography variant="h6">
                    <strong>{e.title}</strong>
                  </Typography>
                  <Typography variant="body1">{e.body}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default ReviewGifs;
