import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const PaginationLink = ({ pageCount }) => {
  const pathArray = window.location.pathname.split('/');
  const propertiesPage = pathArray[2];

  const page = parseInt(propertiesPage);
  return (
    <Pagination
      color="primary"
      variant="outlined"
      page={page}
      count={pageCount}
      renderItem={(item) => (
        <PaginationItem
          href={`/properties/${item.page}`}
          {...item}
        />
      )}
    />
  );
}

export default PaginationLink;
