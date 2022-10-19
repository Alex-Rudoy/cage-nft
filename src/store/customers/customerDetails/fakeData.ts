import { CustomerExtendedDataType } from './customerDetails.types';

export const fakeData: CustomerExtendedDataType = {
  id: '1',
  name: 'Olivia Rhye',
  email: 'olivia@happycloth.com',
  phone_number: '+447700960033',
  avatar: '/images/avatarPlaceholder.jpg',
  last_seen: '2022-04-20T07:59:15Z',
  tags: ['New', 'Customer'],
  channels: ['sms', 'email'],
  revenue: 1000,
  attributes: {
    consent: [
      {
        name: 'Attribute 1',
        display_name: 'Attribute 1',
        value: true,
      },
      {
        name: 'Attribute 2',
        display_name: 'Attribute 2',
        value: false,
      },
      {
        name: 'Attribute 3',
        display_name: 'Attribute 3',
        value: true,
      },
    ],
    identifiers: [
      {
        name: 'Attribute 2',
        display_name: 'Attribute 2',
        value: 'Attribute value',
      },
    ],
    profile_attribute: [
      {
        name: 'Attribute 3',
        display_name: 'Attribute 3',
        value: 'Attribute value',
      },
      {
        name: 'Attribute 4',
        display_name: 'Attribute 4',
        value: 'Attribute value',
      },
    ],
  },
  segments: {
    associated: [],
    entered: [
      {
        id: 101,
        name: 'Segment 1',
        count: 123,
      },
      { id: 102, name: 'Segment 2', count: 1234 },
    ],
    exited: [
      { id: 101, name: 'Segment 3', count: 321 },
      {
        id: 102,
        name: 'Segment 4',
        count: 4321,
      },
    ],
  },
  campaigns: {
    email: [
      { id: 101, name: 'Campaign 1', status: 'Sent' },
      {
        id: 102,
        name: 'Campaign 2',
        status: 'Opened',
      },
    ],
    sms: [
      {
        id: 101,
        name: 'Campaign 3',
        status: 'Sent',
      },
      {
        id: 102,
        name: 'Campaign 4',
        status: 'Opened',
      },
    ],
  },
  flows: [
    {
      name: 'Flow 1',
      status: 'Wait for Condition (Spend > 100)',
    },
    {
      name: 'Flow 2',
      status: 'Wait for Condition (Spend > 100)',
    },
  ],
};
