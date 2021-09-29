import React, { useEffect } from 'react';
import Dictionary from './Dictionary';
import Contents from './Contents';
import { useDispatch, useSelector } from "react-redux";
import { Route, useHistory, Switch } from "react-router-dom";
import { db } from "./firebase";
import { loadlistFB } from "./redux/modules/contents";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadlistFB());
  }, []);



  return (
    <div className="App">
      <Route path="/" exact>
        <Dictionary />
      </Route>
      <Route path="/contents" exact>
        <Contents />
      </Route>


    </div>
  );
}

export default App;

