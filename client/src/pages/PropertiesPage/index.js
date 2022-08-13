import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PropertyCard from "../../components/PropertyCard";
import Properties from "../../services/Properties";
import PaginationLink from "../../components/PaginationLink";
import { useCallback, useEffect, useState } from "react";

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [pagination, setPagination] = useState([]);
  const pathArray = window.location.pathname.split('/');
  const propertiesPage = pathArray[2];

  const fetchProperties = useCallback(async () => {
    const properties = await Properties.fetchAllFromPage(propertiesPage);
    setProperties(properties.content);
    setPagination(properties.pagination);
  }, [propertiesPage]);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  const propertiesToRender = properties.map((property) => (
    <Grid item xs={2} sm={4} md={2} key={property.public_id}>
      <PropertyCard property={property} />
    </Grid>
  ));

  return (
    <>
      <Box pt={4} pl={4}>
        <PaginationLink pageCount={pagination ? pagination.limit : 1} />
      </Box>
      <Box sx={{ flexGrow: 1, padding: 4 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {propertiesToRender}
        </Grid>
      </Box>
    </>
  );
};

export default PropertiesPage;
