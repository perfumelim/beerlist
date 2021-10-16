import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

function BeerTable() {
  const [beerData, setBeerData] = useState([]);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBeerData(data);
      });
  }, []);

  return (
    <div>
      <MaterialTable
        title="Beer List"
        columns={[
          { title: "Name", field: "name" },
          { title: "ABV", field: "abv", type: "numeric" },
          { title: "IBU", field: "ibu", type: "numeric" },
        ]}
        data={beerData}
        actions={[
          {
            icon: "save",
            tooltip: "Add to Cart",
            onClick: (event, rowData) => alert("You saved " + rowData.name),
          },
        ]}
      />
    </div>
  );
}

export default BeerTable;
