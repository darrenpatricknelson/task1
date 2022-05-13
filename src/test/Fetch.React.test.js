import { fetchWeatherData } from '../App';

test('the response is okay and returns data', async () => {
  // testing the weather for cape town
  // expecting the returned value from the function to be resolved
  //  and it needs to be truthy
  return expect(fetchWeatherData('cape+town')).resolves.toBeTruthy();
});

// testing the failure as well
test('the fetch fails with a 404', () => {
  // checking an incorrect input (dummy) which is not a city
  // and seeing if it matches 'Not found'
  return expect(fetchWeatherData('dummy')).rejects.toMatch('Not Found');
});
