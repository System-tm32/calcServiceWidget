import typeConst from '../constants';

export const fetchService = () => async (dispatch) => {
  try {
    console.log('hii');
    const response = await fetch('https://calcservice-64f78.firebaseio.com/service', {
      method: 'POST',
      body: JSON.stringify({ lazer: [{ 1: 'sdfsdfsdf' }], cosmetology: [{ 1: 'sdfsdgfg' }] }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
    dispatch(fetchServices(JSON.stringify(json)));
  } catch (error) {
    console.error('Ошибка:', error);
  }
};

export const fetchServices = (services) => ({
  type: typeConst.FETCH_SERVICES,
  payload: services,
});
