import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropertyCard from "../../components/PropertyCard";

const Properties = () => {
  const dummyProperties = [
    {
      "public_id": "EB-XXX123",
      "title": "Beautiful property in Condesa",
      "title_image_thumb": "https://assets.stagingeb.com/property_images/25339/49442/EB-B5339_thumb.jpg?version=1555543334",
      "property_type": "Apartment",
      "location": "Condesa, Cuauhtemoc",
    },
  ];

  const propertiesToRender = dummyProperties.map((property) => (
    <Grid item xs={2} sm={4} md={2} key={property.public_id}>
      <PropertyCard property={property} />
    </Grid>
  ));

  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {propertiesToRender}
      </Grid>
    </Box>
  );
};

export default Properties;
