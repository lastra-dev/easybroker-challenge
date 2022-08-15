import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const ContactForm = () => {
  return (
    <Box mt={8} sx={{ width: 600, maxWidth: "100%" }}>
      <Typography color="primary" variant="h4">
        Contact the propietary
      </Typography>
      <TextField
        margin="normal"
        fullWidth
        required
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <TextField
        margin="normal"
        fullWidth
        required
        id="outlined-basic"
        type="number"
        label="Phone"
        variant="outlined"
      />
      <TextField
        margin="normal"
        fullWidth
        required
        id="outlined-basic"
        type="email"
        label="Email"
        variant="outlined"
      />
      <TextField
        margin="normal"
        rows={6}
        fullWidth
        required
        multiline
        id="outlined-basic"
        label="Message"
        variant="outlined"
      />
      <Box mt={1}>
        <Button variant="contained" size="large">
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
