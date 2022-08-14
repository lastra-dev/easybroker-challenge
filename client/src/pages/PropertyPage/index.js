import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HouseIcon from "@mui/icons-material/House";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from '@mui/icons-material/Description';
import grey from "@mui/material/colors/grey";

const dummyProperty = {
  public_id: "EB-C0156",
  title: "Casa con uso de suelo prueba",
  title_image_full:
    "https://assets.stagingeb.com/property_images/25338/49435/EB-B5338.jpg?version=1555543329",
  description:
    "Locales comerciales en venta en Calzada del Valle- Construcción total: 6,858.35 m2- Total rentable: 2,645.27 m2 (locales + terrazas)- Total cajones estacionamiento: 114- Terreno según escritura: 1,500 m2LOCALES DISPONIBLES* NIVEL 1 - Local 8 / 144.97 m2 - Local 12 / 49.62 m2 * NIVEL 2 - Local 15 /f 247.65 m2 - Local 16 / 49.62 m2 - Local 18 / 49.62 m2 - Local 20 / 64.89 m2 * NIVEL 3 - Local 21 / 171.24 m2 / terraza 80.41 m2 - Local 22 / 148.86 m2 - Local 23 / 81.72 m2 - Local 24 / 64.89 m2 / terraza 27.43 m2 ID-1391",
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
          <Typography color={grey[400]} variant="h6" align="center">
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
          <Grid item container alignItems="center">
            <DescriptionIcon color="primary" sx={{ fontSize: 13 }} />
            <Typography color="primary" variant="caption">DESCRIPTION</Typography>
            <Typography align="justify" variant="body1">{dummyProperty.description}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PropertyPage;
