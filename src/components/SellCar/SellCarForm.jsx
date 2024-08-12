import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";

export default function SellCarForm({ transmissionType, fuelType, bodyType }) {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const years = [];
  for (let year = 2000; year <= 2024; year++) {
    years.push(year);
  }

  const [sellData, setSellData] = useState({
    regNo: "",
    brand: "",
    model: "",
    year: "",
    price: 0,
    mileage: 0,
    fuelType: "",
    transmission: "",
    description: "",
    owner: 0,
    bodyType: "",
    images: [],
  });

  useEffect(() => {
    if (
      sellData.regNo === "" ||
      sellData.brand === "" ||
      sellData.model === "" ||
      sellData.year === "" ||
      sellData.price === 0 ||
      sellData.mileage === 0 ||
      sellData.fuelType === "" ||
      sellData.transmission === "" ||
      sellData.description === "" ||
      sellData.owner === 0 ||
      sellData.bodyType === "" ||
      sellData.images.length === 0
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [sellData]);

  const handleOpenCarSellForm = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSellData({
      brand: "",
      model: "",
      year: "",
      price: 0,
      mileage: 0,
      fuelType: "",
      transmission: "",
      description: "",
      owner: 1,
      bodyType: "",
      images: [],
    });
  };

  const handleOutsideClick = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("api/sell", {
        brand: sellData.brand,
        model: sellData.model,
        year: sellData.year,
        price: sellData.price,
        mileage: sellData.mileage,
        fuelType: sellData.fuelType,
        transmission: sellData.transmission,
        description: sellData.description,
        owner: sellData.owner,
        postId: 20,
        bodyType: sellData.bodyType,
      });
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
    }
    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
        onClick={handleOpenCarSellForm}
      >
        Sell Car
      </Button>
      <Dialog
        open={open}
        onClose={handleOutsideClick}
        sx={{
          height: 1,
        }}
      >
        <DialogTitle>Sell your car in 1 easy step</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Rest assured, we guarantee a swift, seamless, and guaranteed sale of
            your car with our hassle-free process.
          </DialogContentText>
          <TextField
            autoFocus
            required
            placeholder="GJ 00 XX 0000"
            margin="dense"
            id="regNo"
            label="Car Registration Number"
            type="text"
            fullWidth
            onChange={(event) =>
              setSellData({ ...sellData, regNo: event.target.value })
            }
            variant="outlined"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              required
              margin="dense"
              id="brand"
              label="Brand"
              type="text"
              value={sellData.brand}
              onChange={(event) =>
                setSellData({ ...sellData, brand: event.target.value })
              }
              fullWidth
              sx={{
                mr: 1,
              }}
            />
            <TextField
              required
              margin="dense"
              id="model"
              label="Model"
              type="text"
              value={sellData.model}
              onChange={(event) =>
                setSellData({ ...sellData, model: event.target.value })
              }
              fullWidth
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FormControl sx={{ mr: 1, mt: 1, minWidth: 272 }}>
              <InputLabel id="year-select-label">Year</InputLabel>
              <Select
                labelId="year-select-label"
                id="year-select"
                value={sellData.year}
                label="Year"
                onChange={(event) =>
                  setSellData({ ...sellData, year: event.target.value })
                }
              >
                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              required
              margin="dense"
              id="mileage"
              label="Mileage"
              type="text"
              value={Number(sellData.mileage)}
              onChange={(event) =>
                setSellData({ ...sellData, mileage: event.target.value })
              }
              fullWidth
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FormControl sx={{ mr: 1, mt: 1, minWidth: 272 }}>
              <InputLabel id="transmission-select-label">
                Transmission
              </InputLabel>
              <Select
                labelId="transmission-select-label"
                id="transmission-select"
                value={sellData.transmission}
                label="Transmission"
                onChange={(event) =>
                  setSellData({ ...sellData, transmission: event.target.value })
                }
              >
                {transmissionType.map((transmission, index) => (
                  <MenuItem key={index} value={transmission}>
                    {transmission}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ mr: 1, mt: 1, minWidth: 272 }}>
              <InputLabel id="fuelType-select-label">Fuel Type</InputLabel>
              <Select
                labelId="fuelType-select-label"
                id="fuelType-select"
                value={sellData.fuelType}
                label="fuelType"
                onChange={(event) =>
                  setSellData({ ...sellData, fuelType: event.target.value })
                }
              >
                {fuelType.map((type, index) => (
                  <MenuItem key={index} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FormControl sx={{ mr: 1, mt: 1, minWidth: 272 }}>
              <InputLabel id="bodyType-select-label">Body Type</InputLabel>
              <Select
                labelId="bodyType-select-label"
                id="bodyType-select"
                value={sellData.bodyType}
                label="bodyType"
                onChange={(event) =>
                  setSellData({ ...sellData, bodyType: event.target.value })
                }
              >
                {bodyType.map((type, index) => (
                  <MenuItem key={index} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              required
              margin="dense"
              id="owner"
              label="Owner Number"
              type="text"
              value={Number(sellData.owner)}
              onChange={(event) =>
                setSellData({ ...sellData, owner: event.target.value })
              }
              fullWidth
            />
          </div>
          <TextField
            required
            margin="dense"
            id="description"
            label="Description"
            type="text"
            value={sellData.description}
            onChange={(event) =>
              setSellData({ ...sellData, description: event.target.value })
            }
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="price"
            label="Price"
            type="text"
            value={`₹${sellData.price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            onChange={(event) =>
              setSellData({
                ...sellData,
                price: event.target.value.replace(/[^\d]/g, ""),
              })
            }
            fullWidth
          />
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="images"
            multiple
            type="file"
            onChange={(event) =>
              setSellData({
                ...sellData,
                images: Array.from(event.target.files),
              })
            }
          />
          <label htmlFor="images">
            <Button
              variant="contained"
              component="span"
              fullWidth
              style={{
                marginTop: "10px",
                backgroundColor: "#2e054e",
              }}
            >
              Upload Images
            </Button>
          </label>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button disabled={disabled} onClick={handleSubmit} color="success">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
