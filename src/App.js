import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

import CommonHeader from './CommonHeader'
import DashboardContainer from '../src/DashboardContainer';

function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <CommonHeader />
      <div>
        <p>Switch language</p>
        <button variant="primary" onClick={() => changeLanguage('de')}>
          de
        </button>
        <button variant="primary" onClick={() => changeLanguage('en')}>
          en
        </button>
      </div>
      <div className="container mr-auto pl-5">
        <h1
          style={{ color: "#2b416c" }}><b>{t('header')}</b></h1>
      </div>
      <DashboardContainer />
    </div>
  );
}

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}