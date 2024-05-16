import React from 'react'
import { useState } from 'react';
import './index.scss';
import {Counter} from './components/Counter/Counter'

function App() {
  return (
    <div className="App"> 
    {<Counter/>}
</div>
  );
}

export default App;
