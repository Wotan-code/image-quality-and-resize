import { useState } from "react";

//Material UI components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function ImageOptions(props) {
  const [quality, setQuality] = useState(100);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const changeQuality = () => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement("canvas");
      const image = new Image();
      image.onload = () => {
        canvas.width = width;
        canvas.height = height;
        canvas
          .getContext("2d")
          .drawImage(image, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(
          (blob) => {
            if (blob === null) {
              return reject(blob);
            } else {
              resolve(blob);
            }
          },
          "image/jpeg",
          quality / 100
        );
      };
      image.src = URL.createObjectURL(props.imageUploaded);
    });
  };

  const convertToBase64 = (image) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target.result);
      };
      reader.readAsDataURL(image);
    });
  };

  const previewImage = async () => {
    props.setImageResult(await changeQuality());
    await convertToBase64(props.imageResult).then((base64) => {
      props.setImageResultBase64(base64);
    });
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 1, mb: 1 }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        xs={5}
        md={12}
      >
        <Grid item>
          <TextField
            label="Ancho"
            variant="filled"
            type="number"
            InputProps={{ inputProps: { style: { color: "#fff" } } }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            sx={{ backgroundColor: "#000" }}
            value={width}
            onChange={(e) => {
              setWidth(e.target.value);
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Alto"
            variant="filled"
            type="number"
            InputProps={{ inputProps: { style: { color: "#fff" } } }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            sx={{ backgroundColor: "#000" }}
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
        </Grid>
        <Grid item>
          <Box>
            <Typography variant="h6" align="center">
              {"Quality"}
            </Typography>
            <Slider
              value={quality}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={(e) => {
                setQuality(e.target.value);
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="success"
        component="span"
        sx={{ mt: 2 }}
        onClick={previewImage}
        disabled={props.imageUploaded === null}
      >
        {"Convert"}
      </Button>
    </Grid>
  );
}
