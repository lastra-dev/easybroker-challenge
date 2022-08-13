import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const PropertyPage = () => {
  const dummyProperty = {
    'public_id': 'EB-C0156',
    'title': 'Casa con uso de suelo prueba',
    'title_image_full': 'https://assets.stagingeb.com/property_images/25338/49435/EB-B5338.jpg?version=1555543329',
    'property_type': 'Casa con un solo suelo',
    'location': 'La Punta, Cosío, Aguascalientes'
  };

  return (
    <Box mt={4}>
      <Container maxWidth="xl">
        <Box sx={{ border: '1px solid grey', borderRadius: '4px' }}>
          <Grid container>
            <Grid item>
              <Box
                src={dummyProperty.title_image_full}
                alt="House view"
                component="img"
                sx={{ borderRadius: '8px' }}
              />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item>
                  <Typography align="center">{dummyProperty.public_id}</Typography>
                  <Typography align="center">{dummyProperty.title}</Typography>
                  <Typography align="center">{dummyProperty.property_type}</Typography>
                  <Typography align="center">{dummyProperty.location}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container >
    </Box >
  );
}

export default PropertyPage;
