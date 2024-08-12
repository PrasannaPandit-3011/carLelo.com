import { AccordionDetails, Grid } from "@mui/material";
import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const carDetails = {
  "Dimensions & Capacity": {
    "Ground clearance": "165 mm",
    "Seating capacity": "5 units",
    "Boot space": "280 litres",
    "Number of seating rows": "2 units",
    "Fuel tank capacity": "45 litres",
    "Alloy wheels": "Yes units",
    "Front tyre size": "185/60 R15",
    "Spare wheel": "Yes",
    "Number of doors": "5 units",
    "Gross weight": "1500 kgs",
  },
  "Engine & Transmission": {
    Drivetrain: "Front Wheel Drive",
    "Gear box": "5-Speed",
    "Number of gears": "5 units",
    Displacement: "1198 cc",
    "Number of cylinders": "3 units",
    "Valve/cylinder (configuration)": "4 units",
    "Limited slip differential (LSD)": "No",
    "Mild hybrid": "No",
    Turbocharger: "No",
  },
  "Fuel & Performance": {
    "Mileage (ARAI)": "16.2 kmpl",
    "Top speed": "165 kmph",
    "Max power (bhp)": "74bhp@5400rpm",
    "Max torque (Nm)": "110Nm@3000-4300rpm",
    "Sport mode": "No",
    "Multi drive modes": "No",
  },
  "Suspension, Steering & Brakes": {
    "Suspension front type": "MacPherson Strut",
    "Suspension rear type": "Semi Independent Trailing Arm",
    "Steering adjustment type": "Tilt & Telescopic",
    "Front brake type": "Disc",
    "Rear brake type": "Drum",
    "Steering type": "Power",
    "Minimum turning radius": "4970 mm",
  },
};

const Specification = () => {
  return (
    <div
      style={{
        textAlign: "left",
        margin: "30px 0 0 0",
      }}
    >
      <Typography variant="h5" color="primary.main">
        <strong>Car Details</strong>
      </Typography>
      <Paper
        sx={{
          marginTop: 2,
          width: "810px",
        }}
      >
        <Box
          sx={{
            borderRadius: "20px",
          }}
        >
          {Object.keys(carDetails).map((detail, i) => (
            <Accordion elevation={0} key={i}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">{detail}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  {Object.keys(carDetails[detail]).map((main, i) => (
                    <Grid
                      item
                      key={i}
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Box sx={{ ml: 1 }}>
                        <Typography>{main}</Typography>
                        <Typography variant="subtitle2" fontWeight="bold">
                          {carDetails[detail][main]}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Paper>
    </div>
  );
};

export default Specification;
