import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HouseIcon from "@mui/icons-material/House";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import Property from "services/Property";
import ContactForm from "components/ContactForm";
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
              property?.property_images?.[0]?.url || "/static/images/defaulthouse.jpg"
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
      <ContactForm propertyId={propertyId} />
    </Box>
  );
};

export default PropertyPage;
