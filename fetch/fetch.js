import axios from "axios";

export const getUserInfo = async (id) => {
    try {
        const user = await axios.get(`https://api.stackexchange.com/2.2/users/${id}/questions?order=desc&sort=activity&site=stackoverflow`)
        if (!user) {
            return null
        }
        return user.data.items
    } catch (err) {
        throw new Error(err.response.data.error.message)
    }

}