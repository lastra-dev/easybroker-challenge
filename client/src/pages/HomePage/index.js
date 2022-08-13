import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

const HomePage = () => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={4}>
      <Typography mt={4} align="center" variant="h1" fontWeight={500}>
        A{" "}
        <Box display="inline" sx={{ color: "primary.main" }}>
          Good
        </Box>{" "}
        House
        <br />
        for a good life
      </Typography>
      <Typography align="center" variant="h6" fontWeight={500} color="primary">
        Checkout your dream property now!
      </Typography>
      <Button href="/properties" variant="contained" size="large">
        Get Started
      </Button>
      <Box>
        <CardMedia
          component="video"
          height="400"
          image="/static/videos/video1.mp4"
          alt="Houses recording"
          autoPlay
          muted
          loop
          sx={{ borderRadius: "4%", padding: "0 16px" }}
        />
      </Box>
    </Stack>
  );
};

export default HomePage;
