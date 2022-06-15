import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";

export default function ImageResult(props) {
  return props.imageResult !== null ? (
    <>
      <Avatar
        src={URL.createObjectURL(props.imageResult)}
        variant="square"
        sx={{ width: "100%", height: "100%", maxWidth: 1200, maxHeight: 1200 }}
      />
      <TextField
        id="outlined-multiline-static"
        label="BASE64"
        variant="filled"
        multiline
        rows={4}
        value={props.imageResultBase64}
        InputProps={{ inputProps: { style: { color: "#fff" } } }}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        sx={{ width: "100%", backgroundColor: "#000", mt: 2 }}
      />
    </>
  ) : null;
}
