import React from 'react';
import data from './info.json';
import HoverCard from './HoverCard';
import './Grid.scss'

export default function Grid() {
  return (
    <div className="grid-container">
      <div className="grid">
        {data.map((e) => <HoverCard title={e.title} key={e.id} thumbnail={e.thumbnail} />)}
      </div>
    </div>
  )
}