import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const HomePage = () => {
  return (
    <Box padding={2}>
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
        <Typography
          align="center"
          variant="h6"
          fontWeight={500}
          color="primary"
        >
          Checkout your dream property now!
        </Typography>
        <Button href="/properties" variant="contained" size="large">
          Get Started
        </Button>
        <Box
          component="video"
          src="/static/videos/video1.mp4"
          autoPlay
          muted
          loop
          sx={{ borderRadius: "8px", width: "900px", maxWidth: "100%" }}
        />
        <Box sx={{ height:"90px"}} />
      </Stack>
    </Box>
  );
};

export default HomePage;
