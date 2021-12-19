import axios from 'axios'
// import t from '@/assets/t.json'

export const searchType = async ({ commit }, data) => {
    // const result = t
    // commit('SEARCH__RESULT', result)
    const baseURL = 'https://miianodeprogram.azurewebsites.net:443/'
    const result = await axios.get(baseURL + data)
    commit('SEARCH__RESULT', result.data)
}