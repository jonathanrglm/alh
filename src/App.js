import './App.css';
import { useEffect, useState, useRef } from 'react';
import Header from './symbols/header';
import Home from './screens/Home';
import FirstPart from './screens/FirstPart';
import SecondPart from './screens/SecondPart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  let audioTune = new Audio(`${process.env.PUBLIC_URL}/coin.mp3`)
  audioTune.setAttribute('crossorigin', 'anonymous')


  useEffect(() => {
    audioTune.load();
    audioTune.loop = true;
  }, [])

  const playMusic = () => {
    audioTune.play().then(res => {

    }).catch(err => {
      console.log("err", err)
    })
  }

  return (
    <div style={styles.root}>
      <Header />
      <Router forceRefresh={false} >
        <Switch >
          <Route exact path="/">
            <Home onPress={playMusic} />
          </Route>
          <Route path="/firstPart" component={FirstPart} />
          <Route path="/secondPart" component={SecondPart}/>
        </Switch>
      </Router>
    </div>
  )
}

const styles = {
  root: {
    backgroundColor: 'black'
  }
}

export default App;
