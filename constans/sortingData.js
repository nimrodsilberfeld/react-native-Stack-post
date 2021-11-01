
export const sortDataByDate = (data) => {
    const arr = data.sort((a, b) => {
        return (b.creation_date) - (a.creation_date)
    })
    return arr
}
export const sortDataByAnswers = (data) => {
    const arr = data.sort((a, b) => {
        return (b.answer_count) - (a.answer_count)
    })
    return arr
}
export const sortDataByViews = (data) => {
    const arr = data.sort((a, b) => {
        return (b.view_count) - (a.view_count)
    })
    return arr
}
