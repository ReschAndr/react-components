import * as React from 'react';
import { shallow } from 'enzyme';
import {DataGridPlain} from "@mvp-react/react-datagrid-plain";
import {datagridMuiTheme} from "../";

it('should render', () => {
  shallow(
    <DataGridPlain {...datagridMuiTheme} colDef={[]} onLoadData={() => new Promise((res) => res())} />
  );
});
