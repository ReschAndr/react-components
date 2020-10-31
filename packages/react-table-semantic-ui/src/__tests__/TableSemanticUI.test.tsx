import * as React from "react";
import { shallow } from "enzyme";
import { tableSemanticUITheme } from "../index";
import { TablePlain } from "@mvp-react/react-table-plain";

it("should render", () => {
  shallow(<TablePlain {...tableSemanticUITheme} data={[]} desc={false} />);
});
