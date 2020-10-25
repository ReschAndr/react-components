import * as React from "react";
import { shallow } from "enzyme";
import { tableMuiTheme } from "../index";
import { TablePlain } from "@mvp-react/react-table-plain";

it("should render", () => {
  shallow(<TablePlain {...tableMuiTheme} data={[]} desc={false} />);
});
