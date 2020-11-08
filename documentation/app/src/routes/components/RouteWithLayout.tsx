import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface RouteWithLayoutProps extends RouteProps {
  layout: React.ComponentType<any>;
  component: React.ComponentType<any>;
}

const RouteWithLayout: React.FC<RouteWithLayoutProps> = (props) => {
  const { layout: Layout, component: Component, ...others } = props;

  return (
    <Route
      render={(routeComponentProps) => (
        <Layout>
          <Component {...routeComponentProps} />
        </Layout>
      )}
      {...others}
    />
  );
};

export default RouteWithLayout;
