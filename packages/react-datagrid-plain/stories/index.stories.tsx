import * as React from "react";
import { storiesOf } from "@storybook/react";
import { DataGridPlain } from "../src/DataGridPlain";
import { TablePlain } from "@mvp-react/react-table-plain";
import { tableMuiTheme } from "@mvp-react/react-table-mui";
import { tableSemanticUITheme } from "@mvp-react/react-table-semantic-ui";
import { TablePagination } from "@material-ui/core";
import { useDataState } from "../src/useDataState";

const sampleData1 = [
  { name: "A", number: 1 },
  { name: "B", number: 2 },
  { name: "C", number: 3 },
  { name: "D", number: 4 },
  { name: "E", number: 5 },
  { name: "F", number: 6 },
  { name: "G", number: 7 },
  { name: "H", number: 8 },
  { name: "I", number: 9 },
  { name: "J", number: 10 },
  { name: "K", number: 11 },
  { name: "L", number: 12 },
  { name: "L", number: 13 },
  { name: "L", number: 14 },
  { name: "L", number: 15 },
  { name: "L", number: 16 },
  { name: "L", number: 17 },
  { name: "L", number: 18 },
  { name: "L", number: 19 },
  { name: "L", number: 20 },
  { name: "L", number: 21 },
  { name: "L", number: 22 },
  { name: "L", number: 23 },
  { name: "L", number: 24 },
  { name: "L", number: 25 },
  { name: "L", number: 26 },
  { name: "L", number: 27 },
  { name: "L", number: 28 },
  { name: "L", number: 29 },
];

const demoColDefs = [
  { prop: "name", header: "Name", sortable: true },
  { prop: "number", header: "Zahl" },
];

function handlePaging(data: any[], page: number, rowsPerPage: number) {
  return data.slice(rowsPerPage * (page - 1), rowsPerPage * page);
}

function SimpleExample() {
  return (
    <DataGridPlain
      colDef={demoColDefs}
      initialLoad={true}
      onLoadData={(page, rowsPerPage) =>
        new Promise((res) =>
          res({
            total: sampleData1.length,
            data: handlePaging(sampleData1, page, rowsPerPage),
          })
        )
      }
    />
  );
}

function SelectedRowExample() {
  const [selectedRow, setSelectedRow] = React.useState();

  const handleEditMode = (data: any) => {
    setSelectedRow(data);
  };

  function selectedRowProps(data: any) {
    return { style: { background: "yellow" } };
  }

  return (
    <DataGridPlain
      selectedRow={selectedRow}
      selectedRowProps={selectedRowProps}
      onChangeSelectedRow={handleEditMode}
      colDef={demoColDefs}
      onLoadData={() => {
        return new Promise((res) =>
          res({ total: sampleData1.length, data: sampleData1 })
        );
      }}
    />
  );
}

function ExternalStateExample() {
  const datagridState = useDataState({
    onLoadData: () => {
      return new Promise((res) =>
        setTimeout(() => {
          return res({ total: sampleData1.length, data: sampleData1 });
        }, 3000)
      );
    },
  });

  return (
    <React.Fragment>
      <DataGridPlain state={datagridState} colDef={demoColDefs} />

      <button onClick={() => datagridState.reload()}>Reload</button>
    </React.Fragment>
  );
}

function ExternalStateLocalStorageExample() {
  const datagridState = useDataState({
    persistState: {
      store: "localStorage",
      uniqueID: "ExternalStateLocalStorageExample",
    },
    onLoadData: () => {
      return new Promise((res) =>
        setTimeout(() => {
          return res({ total: sampleData1.length, data: sampleData1 });
        }, 3000)
      );
    },
  });

  return (
    <React.Fragment>
      <DataGridPlain state={datagridState} colDef={demoColDefs} />

      <button onClick={() => datagridState.reload()}>Reload</button>
    </React.Fragment>
  );
}

storiesOf("DataGridPlain", module)
  .add("simple", () => <SimpleExample />)
  .add("initialOrderBy", () => (
    <DataGridPlain
      initialOrderBy="name"
      initialSort="asc"
      initialRowsPerPage={100}
      colDef={demoColDefs}
      onLoadData={(page, rowsPerPage, orderBy, sort, filter) => {
        console.log(
          "OnloadData Props",
          filter,
          rowsPerPage,
          page,
          orderBy,
          sort
        );

        return new Promise((res) =>
          res({ total: sampleData1.length, data: sampleData1 })
        );
      }}
    />
  ))
  .add("selectedRow", () => <SelectedRowExample />)
  .add("externalState", () => <ExternalStateExample />)
  .add("externalStateLocalStorage", () => <ExternalStateLocalStorageExample />);

storiesOf("DataGridMui", module).add("simple", () => (
  <DataGridPlain
    colDef={demoColDefs}
    onLoadData={(page, rowsPerPage) =>
      new Promise((res) =>
        res({
          total: sampleData1.length,
          data: handlePaging(sampleData1, page, rowsPerPage),
        })
      )
    }
    renderTable={(ps) => <TablePlain {...tableMuiTheme} {...ps} />}
    renderPaging={({
      total,
      rowsPerPage,
      page,
      handleChangePage,
      handleChangeRowsPerPage,
    }) => (
      <TablePagination
        component={(ps:any) => <div {...ps}>{ps.children}</div>}
        colSpan={demoColDefs != null ? demoColDefs.length : 1}
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={(e:any, p:any) => handleChangePage(p)}
        onChangeRowsPerPage={(e:any) =>
          handleChangeRowsPerPage(parseInt(e.target.value, 10))
        }
        labelRowsPerPage={"Einträge pro Seite:"}
        labelDisplayedRows={({ from, to, count }:any) =>
          `${from}-${to} von ${count}`
        }
      />
    )}
  />
));

storiesOf("DataGridSemanticUI", module).add("simple", () => (
  <DataGridPlain
    colDef={[
      { prop: "name", header: "Name" },
      { prop: "number", header: "Zahl" },
    ]}
    onLoadData={() =>
      new Promise((res) =>
        res({ total: sampleData1.length, data: sampleData1 })
      )
    }
    renderTable={(ps:any) => <TablePlain {...tableSemanticUITheme} {...ps} />}
    renderPaging={() => <small>Kein Paging in Semantic-UI momentan.</small>}
  />
));
