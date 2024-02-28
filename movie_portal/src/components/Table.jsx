import React from "react";
import DataTable from "react-data-table-component";

function Table({ userData }) {
  const columns = [
    {
      name: "Poster",
      selector: (row) => (
        <img src={row.Poster} alt={row.Title} width="70" height="70" />
      ), // You can include the alt text for accessibility
    },
    {
      name: "Title",
      selector: (row) => row.Title,
    },
    {
      name: "Year",
      selector: (row) => row.Year,
    },
    {
      name: "Type",
      selector: (row) => row.Type,
    },
  ];

  return (
    <>
      {/* pagination fixedHeader fixedHeaderScrollHeight="400px" selectableRows
      selectableRowsHighlight highlightOnHover */}
      <DataTable
        className="mt-7 "
        columns={columns}
        data={userData}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
      />
    </>
  );
}

export default Table;
