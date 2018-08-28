/* eslint-disable no-console */
const connect = require('./src/db/db');
const postModel = require('./src/model/PostModel');

const posts = [
  {
    id: 3, title: 'Why You Should Avoid Knockoff Oral-B and Philips Sonicare Brush Heads', author: 'John Ive', content: 'In several years of using an electric toothbrush I’ve always gone with brand-name brush heads because, well, why change what is working just fine and is fairly inexpensive? But, as we are wont to do at Wirecutter, we also wondered: Is there a point to paying more for the brand-name thing?',
  },
  {
    id: 4, title: 'When to Switch Car Seats', author: 'Tim Cook', content: 'It’s a good time to be a kid in a car: both cars and car seats continue',
  },
  {
    id: 5, title: 'How to Avoid Counterfeits When Looking for Deals', author: 'John Ive', content: 'As more people flock to the Internet for their shopping needs, so do the scammers. What could be worse than buying a new gadget online only to find it’s a knockoff that doesn’t even charge? Your best bet is to pick only those items that have been verified by a trustworthy source (such as your friendly neighborhood Wirecutter Deals team), but if you have to go out there on your own, here are some tricks we use in our scanning that will help you be a more informed shopper',
  },
  {
    id: 6, title: 'How We Evaluate Retailer Reliability', author: 'Tim Cook', content: 'Of the thousands of deals we at Wirecutter Deals encounter each week, only the best 100 or so make it onto.',
  },
];


const connection = connect();
postModel(connection)
  .then((dbModel) => {
    dbModel.bulkCreate(posts)
      .then(() => console.log('Successful seed'))
      .catch(err => console.error('Something went wrong: ', err));
  })
  .catch(err => (console.error('Error: ', err)));
