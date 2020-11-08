import React, { ReactText } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { RouteWithLayout } from './components';
import { HomePage, NotFoundPage } from '../pages';
import { MainLayout } from '../layouts';

interface Route {
  path: string;
  name: string;
}

export function useRoutes() {
  const { formatMessage } = useIntl();

  const routes = {
    home: {
      path: '/home',
      name: formatMessage({ id: 'route.home', defaultMessage: 'Home' }),
    },
    dummyDetail: (id: ReactText) => ({
      path: `/detail/${id}/something`,
      name: formatMessage(
        { id: 'route.dummyDetail', defaultMessage: 'Detail {id}' },
        { id }
      ),
    }),
    dummyDetail2: (id: ReactText, text: ReactText) => ({
      path: `/detail/${id}/something`,
      name: formatMessage(
        { id: 'route.dummyDetail', defaultMessage: 'Detail {id} {text}' },
        { id, text }
      ),
    }),
  };

  const routeMap = routes as {
    [key: string]: Route | ((...args: any[]) => Route);
  };

  getBreadcrumbNameMap();

  function getBreadcrumbNameMap() {
    Object.values(routes).forEach((v) => {
      if (typeof v === 'function') {
        console.log(v, v.length);
      }
    });
  }

  getBreadcrumbName(route:)

  return {
    routes,
    routeMap,
    breadcrumbNameMap: {
      home: {
        path: '/home',
        name: formatMessage({ id: 'route.home', defaultMessage: 'Home' }),
      },
    } as {
      [key: string]: { path: string; name: string };
    },
  };
}

export const Routes = () => {
  const { routes } = useRoutes();
  return (
    <Switch>
      <Redirect exact from="/" to={routes.home.path} />
      <RouteWithLayout
        path={routes.home.path}
        exact
        layout={MainLayout}
        component={HomePage}
      />
      <RouteWithLayout layout={MainLayout} component={NotFoundPage} />
    </Switch>
  );
};
