import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PropertyCard from "components/PropertyCard";
import PropertiesData from "services/PropertiesData";
import PaginationLink from "components/PaginationLink";
import { useCallback, useEffect, useState } from "react";

const PropertiesPage = () => {
  const PROPERTIES_PAGE_POSITION = 2;
  const [properties, setProperties] = useState([]);
  const [pagination, setPagination] = useState([]);
  const pathArray = window.location.pathname.split("/");
  const propertiesPage = pathArray[PROPERTIES_PAGE_POSITION];

  const fetchProperties = useCallback(async () => {
    const response = await PropertiesData.fromPage(propertiesPage);
    const properties = response.data;
    setProperties(properties.content);
    setPagination(properties.pagination);
  }, [propertiesPage]);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  const propertiesToRender = properties.map((property) => (
    <Grid item xs={6} sm={4} md={3} lg={2} key={property.public_id}>
      <PropertyCard property={property} />
    </Grid>
  ));

  return (
    <Box padding={2}>
      <Stack justifyContent="center" alignItems="center" spacing={2}>
        <PaginationLink pageCount={pagination ? pagination.limit : 1} />
        <Grid item container spacing={2}>
          {propertiesToRender}
        </Grid>
      </Stack>
    </Box>
  );
};

export default PropertiesPage;
