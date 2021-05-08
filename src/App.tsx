/* library */
import React, { FC } from 'react';
import { registerRootComponent } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';

/* navigation */
import AppNavigator from 'src/navigations/AppNavigator';

const App: FC = () => {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  )
};

export default registerRootComponent(App);
