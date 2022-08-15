import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

const PaginationLink = ({ pageCount }) => {
  const PROPERTIES_PAGE_POSITION = 2;
  const pathArray = window.location.pathname.split("/");
  const propertiesPage = pathArray[PROPERTIES_PAGE_POSITION];

  const page = parseInt(propertiesPage);
  return (
    <Pagination
      color="primary"
      variant="outlined"
      page={page}
      count={pageCount}
      renderItem={(item) => (
        <PaginationItem href={`/properties/${item.page}`} {...item} />
      )}
    />
  );
};

export default PaginationLink;
