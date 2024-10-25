import React from 'react';
import { View, ScrollView } from 'react-native';
import Movie from './components/Movie'


const AllMovies = () => {
    return (
        <ScrollView>
            <Movie
                title= "Doctor Sleep"
                year= "2019"
                iconName= "skull"
                poster= {require("./img/doctor-sleep.jpg")}
            />
            <Movie
                title= "Midway"
                year= "2020"
                iconName= "person-rifle"
                poster= {require("./img/midway.jpg")}
            />
        </ScrollView>
    );
};

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <AllMovies />
        </View>
    );
};


export default App;
