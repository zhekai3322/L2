import React from 'react'; import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';


const Movie = ({ title, year, iconName, poster }) => {
    return (
        <View>
            <Image source={poster} style={{width:400, height:500}} />
            <View>
                <Text>
                    {title} {year}
                </Text>
                <Icon name={iconName} size={35} color="#333" />
            </View>
        </View>
    );
};

const movieData = [
    {
        title: "Doctor Sleep",
        year: "2019",
        iconName: "skull",
        poster: require("./img/doctor-sleep.jpg"),
    },
    {
        title: "Midway",
        year: "2020",
        iconName: "person-rifle",
        poster: require("./img/midway.jpg"),
    },
];

const AllMovies = () => {
    return (
        <FlatList
            data={movieData}
            renderItem={({ item }) => (
                <Movie
                    title={item.title}
                    year={item.year}
                    iconName={item.iconName}
                    poster={item.poster}
                />
            )}
            keyExtractor={(item) => item.title}
        />
    );
};

const App = () => {
    return (
        <AllMovies />
    );
};


export default App;
