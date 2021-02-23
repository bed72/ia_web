import * as types from './mutations.types'
import { getAll, post, deleter } from '../../../api'

export const actionGetAllSchedules = ({ dispatch }) => {
  getAll('/')
    .then((response) => dispatch('actionSchedules', response.data.disciplines))
    .catch((error) => console.log(error))
}

export const actionCreateSchedules = ({ dispatch }, payload) =>
  post('/', { discipline: payload })
    .then((response) => dispatch('actionGetAllSchedules'))
    .catch((error) => console.log(error))

export const actionDeleteSchedules = ({ dispatch }, payload) => {
  deleter(payload)
    .then(() =>
      dispatch('actionGetAllSchedules')
    )
    .catch((error) => error)
}

export const actionSchedules = ({ commit }, payload) =>
  commit(types.SET_SCHEDULES, payload)
