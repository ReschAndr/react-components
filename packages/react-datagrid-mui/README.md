<!-- # react-datagrid-mui &middot; ![travis build](https://img.shields.io/travis/mvp-react/react-datagrid-mui.svg) ![npm version](https://img.shields.io/npm/v/@mvp-react/react-datagrid-mui.svg) -->

A light datagrid build upon react-table-mui for React, themed with [Material-UI](https://material-ui.com/).

## Installation

You should install [react-datagrid-mui with npm or yarn](https://www.npmjs.com/package/@mvp-react/react-datagrid-mui):

    npm install @mvp-react/react-datagrid-mui
    or
    yarn add @mvp-react/react-datagrid-mui

This command will download and install react-datagrid-mui

## How it works

react-datagrid-mui uses:

- [@mvp-react/react-table-mui](https://www.npmjs.com/package/@mvp-react/react-table-mui) to display the table data
- [TablePagination](https://material-ui.com/api/table-pagination/) from [Material-UI](https://material-ui.com) for the paging controls.

react-datagrid-mui is designed to do all the paging and sorting for you. You only provide the `onLoadData` callback, that returns the data as a `Promise<{data: any[], total: number}>` (paging needs `total` to provide the maximal number pages).

Here is an example:

### Version 2

```javascript
import { DataGridPlain } from "@mvp-react/react-datagrid-plain";
import { datagridMuiTheme } from "@mvp-react/react-datagrid-mui";

<DataGridPlain
  {...datagridMuiTheme}
  colDef={[
    { prop: "id", header: "Id" },
    { prop: "display_name", header: "Full name", sortable: true }
  ]}
  onLoadData={(page, rowsPerPage, orderBy, desc) =>
    fetch(url /* with querystring params */)
      .then(resp => resp.json())
      .then(resp => ({ data: resp.data, total: resp.total }))
  }
/>;
```

TODO: Codesandbox

### Version 1

```javascript
import { DataGridMui } from "@mvp-react/react-datagrid-mui";

<DataGridMui
  colDef={[
    { prop: "id", header: "Id" },
    { prop: "display_name", header: "Full name", sortable: true }
  ]}
  onLoadData={(page, rowsPerPage, orderBy, desc) =>
    fetch(url /* with querystring params */)
      .then(resp => resp.json())
      .then(resp => ({ data: resp.data, total: resp.total }))
  }
/>;
```

[![Edit react-datagrid-mui simple](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/qlwk15q7vq)

&nbsp;or with sorting&nbsp;

[![Edit react-datagrid-mui sortable](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/o9no9k4mzq)

Inside the `onLoadData` you can use whatever Http library you want. That way it is possible to append i.e. authorization tokens, custom http headers, ...

`onLoadData` can provide data from every source. Server, client, rest, GraphQL, ... react-datagrid-mui does not care.

### Caveat or how to reload the DataGrid?

react-datagrid-mui keeps the state of the table (current page, number of displayes rows, ...) internal, so you don't have to worry about the state.

But that also means that react-datagrid-mui triggers any (re-)load of the data itself. If you want to reload the datagrid from outside you must grap the datagrid instance with a `ref` and call `load()` on it.

```javascript
import { DataGridMui } from "@mvp-react/react-datagrid-mui";

class Example extends React.Component {
  datagrid = null;

  render() {
    return (
      <React.Fragment>
        <DataGridMui
          colDef={[
            { prop: "id", header: "Id" },
            { prop: "display_name", header: "Full name", sortable: true }
          ]}
          onLoadData={createLoader(url)}
          ref={r => (this.datagrid = r)}
        />

        <button onClick={() => this.datagrid.load()}>Reload</button>
      </React.Fragment>
    );
  }
}
```

## Changes in Version 2

Version 2 introduced the [react-datagrid-plain](https://www.npmjs.com/package/@mvp-react/react-table-plain) component. It host all the necessary functionality for paging, etc.
This package is just to theme the react-datagrid-plain component. So the usage changed.
