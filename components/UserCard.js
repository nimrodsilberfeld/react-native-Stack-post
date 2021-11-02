import React, { useContext, useState } from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import QuestionsOverView from './QuestionsOverView'
import { MyText } from "../components/MyText"
import colors from '../constans/colors'
import { ThemeContext } from '../utils/ThemeProvider'
export default function UserCard({ userInfo }) {

    const { darkTheme } = useContext(ThemeContext)
    const [ownerInfo, setOwnerInfo] = useState(userInfo[0].owner)
    return (
        <View style={s.screen}>
            <View style={[s.userCard, { backgroundColor: colors('background', darkTheme) }]}>
                <View style={s.topInfo}>
                    <View style={s.imgContainer}>
                        <Image style={s.avatar} source={{ uri: ownerInfo.profile_image }} />
                    </View>
                    <View style={s.user_info}>
                        <MyText style={s.ownerName}>{ownerInfo.display_name}</MyText>
                        <View style={s.reputation}>
                            <MyText>Reputation:   </MyText>
                            <MyText style={s.info_detail}>{ownerInfo.reputation}</MyText>
                        </View>
                        {ownerInfo.accept_rate &&
                            <View style={s.rate}>
                                <MyText>Accept rate:   </MyText>
                                <MyText style={s.info_detail}>{ownerInfo.accept_rate}</MyText>
                            </View>
                        }
                    </View>
                </View>
                <View>
                    <MyText>{userInfo.length} Results</MyText>
                </View>
                <View style={s.bottomInfo}>
                    <QuestionsOverView userInfo={userInfo} />
                </View>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    screen: {
    
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    userCard: {
        width: Dimensions.get('window').width * 0.95,
        height: '100%',
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topInfo: {
        height: '30%',
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgContainer: {
        width: 130,
        height: 130,
        borderRadius: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        overflow: 'hidden'
    },
    avatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    user_info: {
        height: '70%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ownerName: {
        fontSize: 25,
        alignSelf: 'center',
        fontFamily: 'Ubuntu_700Bold'
    },
    reputation: {
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    info_detail: {
        //color: colors('primary'),
        fontFamily: 'Ubuntu_700Bold',
    },
    rate: {
        flexDirection: 'row'
    },
    bottomInfo: {
        height: '70%',

    }
})
