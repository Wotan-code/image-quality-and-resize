//Material UI components
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

export default function ImageUpPreview(props) {
  const Input = styled("input")({
    display: "none",
  });
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Avatar
        src={
          props.imageUploaded !== null
            ? URL.createObjectURL(props.imageUploaded)
            : null
        }
        variant="square"
        sx={{
          width: "120px",
          height: "120px",
          mr: 2,
        }}
      />
      <label htmlFor="contained-button-file">
        <Input
          accept=".jpg, .jpeg, .png"
          id="contained-button-file"
          multiple
          type="file"
          onChange={(e) => {
            props.setImageUploaded(e.target.files[0]);
          }}
        />
        <Button variant="contained" component="span" sx={{ mt: 2 }}>
          {"Subir"}
        </Button>
      </label>
    </Grid>
  );
}
