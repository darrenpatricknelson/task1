const handleLocationSearch = require('../App');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data })
  })
);

test('data is about the weather', async () => {
  const data = await handleLocationSearch('Enter');
  expect(data).toBe('weather');
});
