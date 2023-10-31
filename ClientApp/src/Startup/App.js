import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from '../Routing/AppRoutes';
import { Layout } from '../Components/Layout';
import './custom.css';
import { RecoilRoot } from 'recoil';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <RecoilRoot>
        <Layout>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
        </Layout>
      </RecoilRoot>
    );
  }
}
