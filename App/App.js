import React from 'react';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, ViewPager } from '@ui-kitten/components';

import { HomeScreen } from './components/home';
import { DetailsScreen } from './components/config';


export const HomeViewPager = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <Layout
        style={styles.tab}
        level='2'>
        <Text category='h5'>USERS</Text>
      </Layout>
      <Layout
        style={styles.tab}
        level='2'>
        <Text category='h5'>ORDERS</Text>
      </Layout>
      <Layout
        style={styles.tab}
        level='2'>
        <HomeScreen />
      </Layout>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeViewPager />
  </ApplicationProvider>
);
