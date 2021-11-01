import React, { useContext} from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MainPage from '../screens/MainPage'
import QuestionWeb from '../screens/QuestionWeb'
import { MyText } from "../components/MyText"
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../utils/ThemeProvider'
import colors from '../constans/colors'
const MainStackNavigator = createNativeStackNavigator()

export const MainStack = (props) => {
    const { darkTheme, toggleTheme } = useContext(ThemeContext)

    const toggleThemePress = () => {
        toggleTheme()
    }

    return <MainStackNavigator.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: colors('primary', darkTheme)
            },
            headerTintColor: 'black',
            headerTitleAlign: "left",
            headerTitle: () => <MyText style={{ fontSize: 20, color: "#fff" }}>Stack' Post</MyText>,
            headerRight: () => <Ionicons color={"#fff"} name={darkTheme ? "moon-outline" : "sunny-outline"} size={24} onPress={toggleThemePress} />
        }}
    >
        <MainStackNavigator.Screen
            name="main"
            component={MainPage}
        />
        <MainStackNavigator.Screen name="question" component={QuestionWeb} />
    </MainStackNavigator.Navigator>
}


