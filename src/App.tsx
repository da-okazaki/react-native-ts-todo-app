import React, { FC } from 'react';
import AppNavigator from 'src/navigations/AppNavigator';
import { registerRootComponent } from 'expo'

const App: FC = () => {
    return <AppNavigator />
}

export default registerRootComponent(App);
