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

appData.colors = [
  { name: 'Grey', value: '#CED6E0' },
  { name: 'Yellow', value: '#FFD32A' },
  { name: 'Coral', value: '#FF7F50' },
  { name: 'Pink', value: '#FC427B' },
  { name: 'Red', value: '#FF4D4D' },
  { name: 'Mint', value: '#33D9B2' },
  { name: 'Green', value: '#05C46B' },
  { name: 'Blue', value: '#1E90FF' },
  { name: 'Purple', value: '#921CE8' },
  { name: 'Black', value: '#2F3542' },
];

appData.selectedColor = '#921CE8';

module.exports = appData;
