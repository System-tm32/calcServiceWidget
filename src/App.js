import React from 'react';
import './scss/App.scss';

function App() {
  return (
    <>
      <div className="mainPage">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Калькулятор услуг</h1>
              <p className="description">
                Посчитайте стоимость услуги согласно прайсу медицинского центра Орхидея
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="item">
                <h2 className="title">Лазерное удаление</h2>
                <div className="description">родинки, папилломы, бородавки, кератомы...</div>
                <div className="button">
                  <span>Перейти</span>
                  <span class="material-icons md-35 icon">arrow_right_alt</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="item">
                <h2 className="title">Косметология</h2>
                <div className="description">
                  фотоомоложение, лазерное омоложение, чистка лица...
                </div>
                <div className="button">
                  <span>Перейти</span>
                  <span class="material-icons md-35 icon">arrow_right_alt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="servicePage">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Лазерное удаление</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form">
                <div className="input-group">
                  <label htmlFor="serviceSelect">Выберете услугу</label>
                  <select name="" id="serviceSelect">
                    <option value="">Удаление папиллом</option>
                    <option value="">Удаление родинок</option>
                    <option value="">Удаление кератом</option>
                    <option value="">Удаление бородавок</option>
                    <option value="">Удаление кондилом</option>
                  </select>
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Количество" />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Размер" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="btn secondary">Добавить услугу</div>
              <div className="btn primary">Узнать цену</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
