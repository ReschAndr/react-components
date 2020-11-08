import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Theme,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import Breadcrumbs from '../../components';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  table: {
    minWidth: 650,
  },
  tableContainer: {
    marginTop: theme.spacing(2),
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs rootText="Typescript Material UI" />
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <FormattedMessage
                  id="home.dessert_100g_servings"
                  defaultMessage="Dessert (100g servings)"
                />
              </TableCell>
              <TableCell align="right">
                <FormattedMessage
                  id="home.calories"
                  defaultMessage="Calories"
                />
              </TableCell>
              <TableCell align="right">
                <FormattedMessage id="home.fat" defaultMessage="Fat (g)" />
              </TableCell>
              <TableCell align="right">
                <FormattedMessage id="home.carbs" defaultMessage="Carbs (g)" />
              </TableCell>
              <TableCell align="right">
                <FormattedMessage
                  id="home.protein"
                  defaultMessage="Protein (g)"
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HomePage;
