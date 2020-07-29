import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    ref: 'Entsoc event 1',
    amount: 30.5,
    customer: {
      name: 'EntSoc'
    },
    createdAt: 1555016400000,
    status: 'google.ca'
  },
  {
    id: uuid(),
    ref: 'Conrad event ',
    amount: 25.1,
    customer: {
      name: 'Conrad'
    },
    createdAt: 1555016400000,
    status: 'google.ca'
  },
  {
    id: uuid(),
    ref: 'Shopify Event',
    amount: 10.99,
    customer: {
      name: 'Shopify'
    },
    createdAt: 1554930000000,
    status: 'google.ca'
  },
  {
    id: uuid(),
    ref: 'Velocity Event',
    amount: 96.43,
    customer: {
      name: 'Velocity'
    },
    createdAt: 1554757200000,
    status: 'google.ca'
  },
  {
    id: uuid(),
    ref: 'FEDs event',
    amount: 32.54,
    customer: {
      name: 'UWaterloo'
    },
    createdAt: 1554670800000,
    status: 'uwaterloo.ca'
  }
];
