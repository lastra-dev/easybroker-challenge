import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import HouseIcon from "@mui/icons-material/House";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import Property from "services/Property";
import { useCallback, useEffect, useState } from "react";
import grey from "@mui/material/colors/grey";

const PropertyPage = () => {
  const pathArray = window.location.pathname.split("/");
  const PROPERTY_ID_POSITION = 2;
  const propertyId = pathArray[PROPERTY_ID_POSITION];
  const [property, setProperty] = useState({});

  const fetchProperty = useCallback(async () => {
    const property = await Property.fromId(propertyId);
    setProperty(property);
  }, [propertyId]);

  useEffect(() => {
    fetchProperty();
  }, [fetchProperty]);

  return (
    <Box padding={2}>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={8} lg={5}>
          <Box
            component="img"
            src={
              property?.property_images?.[0]?.url || "/static/images/house.png"
            }
            alt="House view"
            sx={{ borderRadius: "8px", width: "100%" }}
          />
        </Grid>
        <Grid lg item container direction="column" spacing={4}>
          <Grid item>
            <Typography color={grey[400]} variant="h6" align="center">
              {property.public_id}
            </Typography>
          </Grid>
          <Grid item>
            <Typography color={"primary"} variant="h3" align="center">
              {property.title}
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" alignItems="center">
            <HouseIcon />
            <Typography variant="h5" align="center">
              {property.property_type}
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" alignItems="center">
            <LocationOnIcon />
            <Typography variant="h5" align="center">
              {property?.location?.name || ""}
            </Typography>
          </Grid>
          <Grid item container alignItems="center">
            <DescriptionIcon color="primary" sx={{ fontSize: 13 }} />
            <Typography color="primary" variant="caption">
              DESCRIPTION
            </Typography>
            <Typography align="justify" variant="body1">
              {property.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Box mt={8} sx={{ width: 600, maxWidth: '100%' }}>
        <Typography color="primary" variant="h4">Contact the propietary</Typography>
        <TextField margin="normal" fullWidth required id="outlined-basic" label="Name" variant="outlined" />
        <TextField margin="normal" fullWidth required id="outlined-basic" type="number" label="Phone" variant="outlined" />
        <TextField margin="normal" fullWidth required id="outlined-basic" type="email" label="Email" variant="outlined" />
        <TextField margin="normal" rows={6} fullWidth required multiline id="outlined-basic" label="Message" variant="outlined" />
        <Box mt={1}>
          <Button variant="contained" size="large">Send Message</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyPage;
