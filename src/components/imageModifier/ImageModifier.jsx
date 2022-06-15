//React hooks
import { useState } from "react";

//Material UI components
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import ImageUpPreview from "./ImageUpPreview";
import ImageOptions from "./ImageOptions";
import ImageResult from "./ImageResult";

export default function ImageModifier() {
  const [imageUploaded, setImageUploaded] = useState(null);
  const [imageResult, setImageResult] = useState(null);
  const [imageResultBase64, setImageResultBase64] = useState("");

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Paper elevation={10} sx={{ p: 5 }}>
        <Typography align="center" variant="h2" gutterBottom>
          {"Modificador de imagenes"}
        </Typography>
        <ImageUpPreview
          imageUploaded={imageUploaded}
          setImageUploaded={setImageUploaded}
        />
        <ImageOptions
          imageUploaded={imageUploaded}
          imageResult={imageResult}
          setImageResult={setImageResult}
          imageResultBase64={imageResultBase64}
          setImageResultBase64={setImageResultBase64}
        />
        <ImageResult imageResult={imageResult} imageResultBase64={imageResultBase64} />
      </Paper>
    </Grid>
  );
}
