import React, { useContext, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Entypo } from '@expo/vector-icons';
import { getUserInfo } from '../fetch/fetch';
import UserCard from '../components/UserCard';
import colors from '../constans/colors';
import { ThemeContext } from '../utils/ThemeProvider';
export default function MainPage() {
    const { darkTheme } = useContext(ThemeContext)
    const [search, setSearch] = useState('')
    const [userInfo, setUserInfo] = useState([])
    const [foundUser, setFoundUser] = useState(false)
    const [isFetching, setisFetching] = useState(false)
    const changeTextHandler = (text) => {
        setSearch(text)
        setFoundUser(false)
        setUserInfo([])
    }

    const searchHandler = () => {
        setFoundUser(false)
        setUserInfo([])
        setisFetching(true)
        getUserInfo(search)
            .then((userInfo) => {
                if (userInfo[0]?.owner) {
                    setUserInfo(userInfo)
                    setFoundUser(true)
                } else {
                    setFoundUser(false)
                }
                setisFetching(false)
            })
            .catch((err) => {
                console.log("not found")
                setFoundUser(false)
                setisFetching(false)
            })
    }

    return (
        <View style={[s.screen, { backgroundColor: colors('semiBack', darkTheme), }]}>
            <View style={s.searchBox}>
                <TextInput
                    style={s.textInput}
                    value={search}
                    placeholder={"Type user id..."}
                    onChangeText={(text) => changeTextHandler(text)}
                    returnKeyType={"done"}
                    onSubmitEditing={() => {
                        searchHandler()
                    }}
                    keyboardType={'number-pad'}
                    placeholderTextColor={colors('primary')}
                />
                <Entypo style={{ marginHorizontal: 5 }} name="magnifying-glass" size={24} color="black" />
            </View>
            {isFetching &&
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={"large"} color={darkTheme ? "white" : colors('primary')} />
                </View>
            }
            {foundUser &&
                <UserCard userInfo={userInfo} />
            }
        </View>
    )
}

const s = StyleSheet.create({
    screen: {
        flex: 1,

        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchBox: {
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: '#eee',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1
    },
    textInput: {
        width: '95%',
        color: colors('primary')
    }
})