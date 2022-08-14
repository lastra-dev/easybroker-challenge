import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HouseIcon from "@mui/icons-material/House";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const dummyProperty = {
  public_id: "EB-C0156",
  title: "Casa con uso de suelo prueba",
  title_image_full:
    "https://assets.stagingeb.com/property_images/25338/49435/EB-B5338.jpg?version=1555543329",
  property_type: "Casa con un solo suelo",
  location: "La Punta, Cosío, Aguascalientes",
};

const PropertyPage = () => {
  return (
    <Box margin={4}>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={8} lg={6}>
          <Box
            component="img"
            src={dummyProperty.title_image_full}
            alt="House view"
            sx={{ borderRadius: "16px", width: "100%" }}
          />
        </Grid>
        <Grid lg item container direction="column" spacing={4}>
          <Typography variant="h6" align="center">
            {dummyProperty.public_id}
          </Typography>
          <Typography color={"primary"} variant="h3" align="center">
            {dummyProperty.title}
          </Typography>
          <Grid item container justifyContent="center" alignItems="center">
            <HouseIcon />
            <Typography variant="h5" align="center">
              {dummyProperty.property_type}
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" alignItems="center">
            <LocationOnIcon />
            <Typography variant="h5" align="center">
              {dummyProperty.location}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PropertyPage;
