import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PropertyCard = ({ property }) => {
  return (
    <Card sx={{ maxWidth: 300, height: 480 }}>
      <CardMedia
        component="img"
        height="200"
        image={property?.title_image_thumb || "/static/images/house.png"}
        alt="A property"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          fontWeight={500}
          component="div"
        >
          {property?.title || "Unkown house"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property?.property_type || "Unkown property type"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property?.location || "Unkown location"}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {property?.public_id || "Unkown ID"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href={property?.public_id ? `/property/${property.public_id}` : null}
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
