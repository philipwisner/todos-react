const appData = {};

appData.todos = [
  {
    id: 1,
    text: 'Grocery Shopping',
    completed: true,
  },
  {
    id: 2,
    text: 'Clean Room',
    completed: false,
  },
  {
    id: 3,
    text: 'Study Spanish',
    completed: false,
  },
  {
    id: 4,
    text: 'Learn Git',
    completed: false,
  },
  {
    id: 5,
    text: 'Learn React',
    completed: false,
  },
  {
    id: 6,
    text: 'Learn Redux',
    completed: false,
  },
];

appData.statuses = [
  { name: 'All', value: 'all' },
  { name: 'Pending', value: 'pending' },
  { name: 'Completed', value: 'completed' },
];

module.exports = appData;
