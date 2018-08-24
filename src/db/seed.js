import { connect, fixtures, MODE_TEST } from './db';

const data = {
  tables: {
    post: [
      { id: 3, name: 'John' },
      { id: 4, name: 'Peter' },
    ],
  },
};

/* eslint-disable no-console */
connect(MODE_TEST, () => {
  fixtures(data, (err) => {
    if (err) return console.log(err);
    console.log('Data has been loaded...');
    return data;
  });
});
