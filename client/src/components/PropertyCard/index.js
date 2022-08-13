import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PropertyCard = ({ property }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        image={property.title_image_thumb}
        alt="A property"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          fontWeight={500}
          component="div"
        >
          {property.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.property_type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
