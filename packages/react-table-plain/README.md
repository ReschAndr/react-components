# @mvp-react/react-table-plain &middot; ![travis build](https://img.shields.io/travis/@mvp-react/react-table-plain.svg) ![npm version](https://img.shields.io/npm/v/@mvp-react/react-table-plain.svg)

A NPM package that helps creating HTML tables in a React-way. It was partly inspired by [react-table](https://react-table.js.org).

@mvp-react/react-table-plain is written in [Typescript](https://www.typescriptlang.org/) and comes with its own type definitions.

## Installation

You should install [@mvp-react/react-table-plain with npm or yarn](https://www.npmjs.com/package/@mvp-react/react-table-plain):

    npm install react-table-plain
    or
    yarn add react-table-plain

This command will download and install react-table-plain and all required dependencies.

## Minimal version

```javascript
import React from "react";
import { TablePlain } from "@mvp-react/react-table-plain";

function App() {
  return (
    <TablePlain
      data={[
        { id: 1, name: "Alexa" },
        { id: 2, name: "Google Home" },
        { id: 3, name: "Cortana" }
      ]}
      colDef={[
        {
          prop: "id",
          header: "ID"
        },
        {
          prop: "name",
          header: "User name",
          sortable: true
        }
      ]}
    />
  );
}
```

<!-- [![Edit react-table-plain mini](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/1o5m67xz5j) -->

## Properties

| Property                  | Type                                                         | Optional | Description                                                                                                                                                |
| ------------------------- | ------------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| rootElement               | React.ReactNode                                              | x        | Normaly &lt;table&gt;                                                                                                                                      |
| rowElement                | React.ReactNode                                              | x        | Normaly &lt;tr&gt;                                                                                                                                         |
| cellElement               | React.ReactNode                                              | x        | Normaly &lt;td&gt;                                                                                                                                         |
| headerCellElement         | React.ReactNode                                              | x        | Normaly &lt;th&gt;                                                                                                                                         |
| headerElement             | React.ReactNode                                              | x        | Normaly &lt;thead&gt;                                                                                                                                      |
| bodyElement               | React.ReactNode                                              | x        | Normaly &lt;tbody&gt;                                                                                                                                      |
| footerElement?            | React.ReactNode                                              | x        | Normaly &lt;tfooter&gt;                                                                                                                                    |
| renderSortLabel?          | colDef: IColDef, desc: boolean) => React.ReactNode           | x        | Render the sort label (arrow down/up) in header                                                                                                            |
| data                      | any[]                                                        |          | Data array to render                                                                                                                                       |
| colDef?                   | IColDef[]                                                    | x        | Definitions for all columns                                                                                                                                |
| orderBy?                  | string                                                       | x        |
| sort?                     | "asc" \| "desc"                                              |          |
| onChangeOrderBy?          | colDef: IColDef) => void                                     | x        | Called, when sorting changed                                                                                                                               |
| onChangeFilter?           | ChangeFilterHandler                                          | x        | Called, when filter changed                                                                                                                                |
| onRowClick?               | data: any) => void                                           | x        | Called, when one row has bee clicked                                                                                                                       |
| renderRoot?               | children: React.ReactNode) => React.ReactNode                | x        | Returns root element to render                                                                                                                             |
| renderHeaderCell?         | col: IColDef, idx: number) => React.ReactNode                | x        | Returns header element to render                                                                                                                           |
| renderFooterCell?         | ( col: IColDef, data: any[], idx: number) => React.ReactNode | x        | Returns footer element to render                                                                                                                           |
| renderFilter?             | (col: IColDef, idx: number) => React.ReactNode               | x        | Returns the filter for a column                                                                                                                            |
| renderExpansionIndicator? | (expanded: boolean) => React.ReactNode                       | x        | Returns the expanstion indicator to toggle a sub-component.                                                                                                |
| subComponent?             | (data: any) => React.ReactNode                               | x        | Returns the subcomponent for a row.                                                                                                                        |
| rowProps?                 | (data: any) => object                                        | x        | Callback that returns the props for a row.                                                                                                                 |
| cellProps?                | (data: any) => object                                        | x        | Callback that returns the props for a cell.                                                                                                                |
| filter?                   | object                                                       | x        | Current filter object.                                                                                                                                     |
| defaultFilter?            | object                                                       | x        | One time filter object.                                                                                                                                    |
| ellipsis?                 | boolean                                                      | x        | Use text ellipsis to shorten lengthy text content?                                                                                                         |
| selectedRow?              | any / any[]                                                  | x        | If any single-line-selection, if any[] multi-line-selection.                                                                                               |
| onChangeSelectedRow?      | (data:any)=>void                                             | x        | Callback when selection changes.                                                                                                                           |
| selectedRowProps?         | (data:any)=>object                                           | x        | Gets called if row is in scope of "selectedRow". The return value is set as property in the "tr" tag.                                                      |
| rowSelectionColumnName    | string                                                       | x        | The name of the property of data that should be checked if it is in "selectedRow" scope. If null/undefined it checks if the whole data object is in scope. |

## Features

### Sorting

@mvp-react/react-table-plain supports sorting by a single column.

```javascript
class App extends React.Component {
  state = {
    orderby: "",
    sort: "asc",
    data: [
      { id: 1, name: "Alexa" },
      { id: 2, name: "Google Home" },
      { id: 3, name: "Cortana" }
    ]
  };
  render() {
    return (
      <TablePlain
        data={this.state.data}
        colDef={[
          {
            prop: "id",
            header: "ID"
          },
          {
            prop: "name",
            header: "User name",
            sortable: true
          }
        ]}
        orderBy={this.state.orderby}
        sort={this.state.sort}
        onChangeOrderBy={this.handleChangeOrderBy}
      />
    );
  }

  handleChangeOrderBy = col => {
    let sort? : SortDirection;
    if (this.state.orderby === col.prop) {
      sort = this.state.sort === "desc" ? "asc" : "desc";
    }
    this.setState(prev => ({
      orderby: col.prop,
      sort,
      data: sortData(prev.data, col.prop, sort)
    }));
  };
}

function sortData(data, prop, desc) {
  let result = data.sort((a, b) => a[prop] > b[prop]);
  return desc ? result.reverse() : result;
}
```

<!-- [![Edit @mvp-react/react-table-plain sort](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/305v98omy5) -->

**IMPORTANT:** react-table-plain doesn't do the sorting. It just displays the data.
The caller is responsible for sorting the data.

### Render custom cells

TODO

### Set row props

You can set the props of each row, depending on the data for each row. For example to highlight a single row.

```javascript
import React from "react";
import { TablePlain } from "@mvp-react/react-table-plain";

function App() {
  return (
    <TablePlain
      data={[
        { id: 1, name: "Alexa" },
        { id: 2, name: "Google Home" },
        { id: 3, name: "Cortana" }
      ]}
      colDef={[
        {
          prop: "id",
          header: "ID"
        },
        {
          prop: "name",
          header: "User name",
          sortable: true
        }
      ]}
      rowProps={data => ({
        style: { background: data.id === 1 ? "yellow" : null }
      })}
    />
  );
}
```

<!-- [![Edit @mvp-react/react-table-plain rowProps](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/18vv15mo84) -->

### Fixed Column width

Depending on the displayed data the width of the columns might vary. To prevent that (i.e. during paging) you may set the width of a column.
How does it work:

```javascript
colDef={[{
    prop: "id",
    header: "ID",
    width: 1
  },
  {
    prop: "name",
    header: "Full name",
    width: 2
  },
  {
    prop: "ocupation",
    header: "Work",
    width: 2
  }]}
```

<!-- [![Edit @mvp-react/react-table-plain rowProps](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/l39m51vk1z) -->

The total of all widths is 100% of the table width and each column is sized according to the width value. Like:

- Property "id" has a width of 1 of a total of 5. So the with is 1/5 of 100% that is 20% of the table width.
- Property "name" has a width of 2. The total width is still 5. So the width is 2/5. That is 40% of the table width.

### Filter

You can add a filter for each row.

```javascript
colDef={[
  {
    prop: "name",
    header: "Full name",
    filterable: true
  }
]}
```

This renders a `<input type="text" />` below the `header`.
`onChangeFilter` reflects any changes to the filter.

#### Custom Filter inputs

To render custom filter inputs i.e. a datepicker you can provide the `renderFilter` property with a component.

```javascript
colDef={[
  {
    prop: "name",
    header: "Full name",
    filterable: true,
    renderFilter: (value, handleChange) => <Datepicker value={value} onChange={e => handleChange(e.traget.value)}
  }
]}
```

<!-- [![Edit @mvp-react/react-table-plain rowProps](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/y0jorjqp41) -->

The `handleChange` callback enables the table to collect all filter values and provide them to you.

#### Handling Filter State

By default the filter state is handled by `react-table-plain`. If you like to preset filter values or have control over the filter as a whole you can provide a `filter` property of type `object`.
Now it is your responsipility to update the `filter` property according to the changes delivered by the `onChangeFilter` callback. If you don't update the `filter` no updates will be seen in the view.

```javascript
state = {
  filter: {}
}

render() {
  return <TablePlain
    colDef={[{
      prop: "name",
      header: "Full name",
      filterable: true
    }]}
    filter={this.state.filter}
    onChangeFilter={this.handleFilterChange}
    />;
}

handleFilterChange = (col, val) => {
  this.setState(p => ({
    filter: {
      {...p.filter},
      [col.prop]: val
    }
  }))
}
```

<!-- [![Edit @mvp-react/react-table-plain external filter](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/92z0klrvmp) -->

### Cell properties for all cells

To set the props of all body cells you can use the `cellProps` property of the table like this:

```javascript
<TablePlain
  cellProps={data => ({
    style: {
      whiteSpace: "nowrap",
      width: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  })}
  // ...
/>
```

### Row Selection

This table supports two types of selection. <b>Single</b> and <b>Multi</b> Selection

#### Single Row Selection

<b>selectedRow: </b>To use single-row-selection the selectedRow has to bee of type "any". In this case the Id of the selected row.

<b>selectedRowProps: </b>This function is called by every row that is in scope of selectedRow. The function returns a object which is put into "tr" tag of the row. If this function is not provided the background of the Row is set to grey by default.

<b>onChangeSelectedRow: </b>This function is called, when the selection changes (User clicks on row).

<b>rowSelectionColumnName: </b>The name of the property of the data that should be checked if it is in scope of selectedRow. If it is not provided the whole data object is checked if it is in scope.

```javascript
const data = [
  { id: 1, name: "Alexa" },
  { id: 2, name: "Google Home" },
  { id: 3, name: "Cortana" }
];

const [selectedRow, setSelectedRow] = React.useState();

function handleSelectionChange(data) {
  setSelectedRow(data.id);
}

function selectedRowProps(data) {
  return { style: { background: "yellow" } };
}

<TablePlain
  data={data}
  colDef={[
    {
      prop: "id",
      header: "ID"
    },
    {
      prop: "name",
      header: "User name",
      sortable: true
    }
  ]}
  selectedRow={selectedRow}
  selectedRowProps={selectedRowProps}
  onChangeSelectedRow={handleSelectionChange}
  rowSelectionColumnName="id"
/>;
```

<!-- [![Edit @mvp-react/react-table-plain single-line-selection](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/0y5k9y0pjv?fontsize=14) -->

#### Multi-Line-Selection

<b>selectedRow: </b>To use multi-row-selection the selectedRow has to bee of type "any[]". In this case the Ids of the selected rows.

<b>selectedRowProps: </b>This function is called by every row that is in scope of selectedRow. The function returns a object which is put into "tr" tag of the row. If this function is not provided the background of the Row is set to grey by default.

<b>onChangeSelectedRow: </b>This function is called, when the selection changes (User clicks on row).

<b>rowSelectionColumnName: </b>The name of the property of the data that should be checked if it is in scope of selectedRow. If it is not provided the whole data object is checked if it is in scope.

```javascript
const data = [
  { id: 1, name: "Alexa" },
  { id: 2, name: "Google Home" },
  { id: 3, name: "Cortana" }
];

const [selectedRows, setSelectedRows] = React.useState([]);

function selectedRowProps(data) {
  return { style: { background: "yellow", cursor: "pointer" } };
}

function handleSelectionChange(data) {
  setSelectedRows([...selectedRows, data.id]);
}

<TablePlain
  data={data}
  colDef={[
    {
      prop: "id",
      header: "ID"
    },
    {
      prop: "name",
      header: "User name",
      sortable: true
    }
  ]}
  selectedRow={selectedRows}
  selectedRowProps={selectedRowProps}
  onChangeSelectedRow={handleSelectionChange}
  rowSelectionColumnName="id"
/>;
```

<!-- [![Edit @mvp-react/react-table-plain multi-line-selection](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/oxxw81kmnz?fontsize=14) -->

### Content styling

#### Alignment

You can always set cell properties with `props: () => ({style: {textAlign: "right"}})` to achive alignment of the cell content.
To make things easier we introduced the `align` property, that aligns header, body and footer cell content.

<!-- [![Edit @mvp-react/react-table-plain align](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/oxnvn95lz) -->

#### Ellipsis

This setting applies to all body cells.

<!-- [![Edit @mvp-react/react-table-plain table-wide cell props](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v32l3qo010) -->

### Subcomponent

TODO

### Theming

TODO

## Contributing

### License

@mvp-react/react-table-plain is [MIT licensed](https://github.com/facebook/react/blob/master/LICENSE)
