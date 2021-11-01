import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { MyText } from "../components/MyText"
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../constans/colors';
import { ThemeContext } from '../utils/ThemeProvider';
export default function QuestionLine({ question, status }) {
    const navigation = useNavigation()
    const { darkTheme } = useContext(ThemeContext)
    const ExtraInfo = () => {
        switch (status) {
            case 'Date':
                return <MyText style={styles.date}>{new Date(question.creation_date * 1000).toISOString()}</MyText>
            case "Answers":
                return <MyText style={styles.date}>{question.answer_count} answers</MyText>
            case 'Views':
                return <MyText style={styles.date}>{question.view_count} views</MyText>
        }
    }
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('question', { url: question.link })
        }} style={[styles.line, { backgroundColor: darkTheme ? colors('background', darkTheme) : "#fff" }]}>
            <View style={styles.contant}>
                <View style={styles.short}>
                    <View style={{ width: '90%' }}>
                        <MyText numberOfLines={1} style={styles.title}>{question.title}</MyText>
                    </View>
                    <ExtraInfo />
                </View>
                <SimpleLineIcons name="arrow-right" size={24} color={colors('primary')} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    line: {
        height: 80,
        width: '95%',
        alignSelf: 'center',
        marginVertical: 7,
        borderColor: 'rgba(0,0,0,.0)',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    contant: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    title: {
        fontSize: 16
    },
    date: {
        marginTop: 4,
        fontSize: 12
    }
})
