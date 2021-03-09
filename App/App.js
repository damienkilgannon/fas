import React from 'react';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, ViewPager } from '@ui-kitten/components';

import { HomeScreen } from './components/home';
import { ConfigScreen } from './components/config';
import { ManagerScreen } from './components/manager';


export const HomeViewPager = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ViewPager
      style={{flex: 1}}
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <Layout
        style={styles.tab}
        level='2'>
        <ManagerScreen />
      </Layout>
      <Layout
        style={styles.tab}
        level='2'>
        <HomeScreen />
      </Layout>
      <Layout
        style={styles.tab}
        level='2'>
        <ConfigScreen />
      </Layout>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeViewPager />
  </ApplicationProvider>
);
