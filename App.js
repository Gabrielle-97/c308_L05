/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from 'react-native';
import { ScrollView } from 'react-native';
import {BoatList} from "./Boats";

import MovieList from './Movie.js';

const App: () => React$Node = () => {
  return (
      <ScrollView>
        <Text>Lesson 05 Exercise</Text>
        <MovieList />
        <Text>Boat List</Text>
        <BoatList />
      </ScrollView>
  );
};

export default App;
