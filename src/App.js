import React from 'react';
import { Route } from 'react-router-dom';
import './scss/App.scss';

import Header from './components/Header';
import ServiceBlock from './components/ServiceBlock';

import { fetchService } from './store/actions/service';

function App() {
  React.useEffect(() => {
    fetchService();
  }, []);

  return (
    <div className="mainPage">
      <div className="container">
        <Header
          h1="Калькулятор услуг"
          description="Посчитайте стоимость услуги согласно прайсу медицинского центра Орхидея"
        />
        <ServiceBlock
          title="Лазерное удаление"
          description="родинки, папилломы, бородавки, кератомы..."
        />
        <ServiceBlock
          title="Косметология"
          description="фотоомоложение, лазерное омоложение, чистка лица..."
        />
      </div>
    </div>
  );
}

export default App;
