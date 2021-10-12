import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import theme from '../src/theme';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/layout/Layout'
import '../styles/global.css'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import LoadingReduxPersist from '../components/loadings/LoadingReduxPersist'
import NextNprogress from 'nextjs-progressbar';
import createEmotionCache from '../src/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const persistor = persistStore(store)
  const { Component, pageProps: { session, ...pageProps }, emotionCache = clientSideEmotionCache } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>EzeSneakers</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <Provider store={store}>
        <PersistGate loading={<LoadingReduxPersist />} persistor={persistor}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <SnackbarProvider maxSnack={3}>
                <CssBaseline />
                <SessionProvider session={session}>
                  <NextNprogress
                    color='grey'
                    options={{ showSpinner: false }}
                  />
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </SessionProvider>
              </SnackbarProvider>
            </ThemeProvider>
          </StyledEngineProvider>
        </PersistGate>
      </Provider>
    </CacheProvider>
  );
}


MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};