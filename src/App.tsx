import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import {
  ChooseUsLayout,
  CrmLayout,
  CustomerMapLayout,
  DataObtained,
  EcosystemLayout,
  LeaderLayout,
  MainLayout,
  ProductionLayout,
  ProgramForSuccess,
  ProjectsLayout,
  ValidationServiceLayout,
  YourBrandsLayout,
  ContactsLayout,
} from 'layouts';
import { antTheme } from 'style/antTheme';
import s from './App.module.scss';

const { Content } = Layout;

export const App = () => {
  return (
    <ConfigProvider theme={antTheme}>
      <Layout className={s.layout}>
        <Content className={s.content}>
          <MainLayout />
          <EcosystemLayout />
          <LeaderLayout />
          <ChooseUsLayout />
          <DataObtained />
          <ProgramForSuccess />
          <ProjectsLayout />
          <YourBrandsLayout />
          <CustomerMapLayout />
          <CrmLayout />
          <ValidationServiceLayout />
          <ProductionLayout />
          <ContactsLayout />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};
