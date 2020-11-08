import React from 'react';

import { Breadcrumbs as MuiBreadCrumbs, Typography } from '@material-ui/core';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Link, { LinkProps } from '@material-ui/core/Link';
import { useRoutes } from '../../routes';

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink as any} />
);

interface IBreadCrumbsProps {
  rootText: string;
}

const Breadcrumbs: React.FC<IBreadCrumbsProps> = (props) => {
  const { rootText } = props;

  const { breadcrumbNameMap } = useRoutes();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  console.log(pathnames);
  console.log(breadcrumbNameMap);

  return (
    <MuiBreadCrumbs>
      <LinkRouter color="inherit" to="/">
        {rootText}
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        console.log(to, breadcrumbNameMap[to]);

        return last ? (
          <Typography color="textPrimary" key={to}>
            {breadcrumbNameMap[to]?.name}
          </Typography>
        ) : (
          <LinkRouter color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]?.name}
          </LinkRouter>
        );
      })}
    </MuiBreadCrumbs>
  );
};

export default Breadcrumbs;
