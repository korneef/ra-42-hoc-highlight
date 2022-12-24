/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './App.css';
import { data } from './data/data';
import { List } from './components/index';

export default function App() {
  const [list] = useState(data);

  return (
    <List list={list} />
  );
}