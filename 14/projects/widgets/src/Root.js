import React from 'react';

import Clock from './Clock.js';

import Folder from './Folder.js';

import Weather from './Weather.js';

import Autocomplete from './Autocomplete.js';

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' },
];

const names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander',
];

const Root = () => {
  return (
    <>
      <Clock />
      <Weather />
      <Folder folders={folders} />
      <Autocomplete names={names} />
    </>
  );
};
export default Root;
