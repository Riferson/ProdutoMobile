import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Produtos } from './src/screens/Produtos';
import theme from './src/global/styles/theme';
import { StackRoutes } from './src/routes/stack.routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StackRoutes/>
    </ThemeProvider>
  );
}
