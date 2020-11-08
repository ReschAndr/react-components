import * as React from 'react';
import { IColDef } from '@mvp-react/react-table-plain';
import { Table, Icon, Button } from 'semantic-ui-react';

export const tableSemanticUITheme = {
  rootElement: Table as any, // some kind of BUG?
  rowElement: Table.Row,
  cellElement: Table.Cell,
  headerCellElement: Table.HeaderCell,
  headerElement: Table.Header,
  bodyElement: Table.Body,
  footerElement: Table.Footer,
  renderSortLabel: (colDef: IColDef, desc: boolean) => (
    <span
      style={{
        fontFamily: 'Icons',
        height: '1em',
      }}
    >
      {desc ? '&#xf0d7;' : '&#xf0d8;'}
    </span>
  ),
  renderExpansionIndicator: (expanded: boolean) => (
    <Button
      icon
      style={{
        transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        transform: `rotate(${expanded ? 0 : -90}deg)`,
      }}
    >
      <Icon name="chevron right" />
    </Button>
  ),
};
