import React from 'react';

import { SafeAreaView } from 'react-native';
import { Divider, Layout, Text } from '@ui-kitten/components';


export const ManagerScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>MANAGER</Text>
      </Layout>
    </SafeAreaView>
  );
};
