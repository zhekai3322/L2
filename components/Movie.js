import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';


const Movie = ({ title, year, iconName, poster }) => {
    return (
        <View>
            <Image source={poster} style={{width:400, height:500}} />
            <View>
                <Text>
                    {title} {year}
                </Text>
                <Icon name={iconName} size={100} color="#333" />
            </View>
        </View>
    );
};
export default Movie;
