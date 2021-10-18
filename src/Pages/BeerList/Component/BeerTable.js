import React from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

function BeerTable({ data }) {
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  return (
    <div>
      <MaterialTable
        icons={tableIcons}
        data={data}
        localization={{
          header: {
            actions: "Cart",
          },
        }}
        columns={[
          { title: "Name", field: "name" },
          { title: "ABV", field: "abv", type: "numeric" },
          { title: "IBU", field: "ibu", type: "numeric" },
        ]}
        actions={[
          {
            tooltip: "Add to Cart",
            onClick: (event, rowData) => alert("You saved " + rowData.name),
          },
        ]}
        components={{
          Action: (props) => (
            <CartBtn
              onClick={(event) => props.action.onClick(event, props.data)}
              icon={<ShoppingCartOutlined />}
            ></CartBtn>
          ),
        }}
        options={{
          headerStyle: {
            backgroundColor: "#F3C705",
            color: "#000000",
          },
          showTitle: false,
          actionsColumnIndex: -1,
          pageSize: 7,
        }}
      />
    </div>
  );
}

export default BeerTable;

const CartBtn = styled(Button)`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #f3c705;
  border: none;
  border-radius: 50%;

  :hover {
    background-color: #5a6268;
  }
`;
