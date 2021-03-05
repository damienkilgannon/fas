import React from 'react';

import { SafeAreaView } from 'react-native';
import { Divider, Text, Layout } from '@ui-kitten/components';


export const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>HOME</Text>
      </Layout>
    </SafeAreaView>
  );
};
