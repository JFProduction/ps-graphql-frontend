import AppDispatcher from "../AppDispatcher"
import { RECEIVE_LINKS } from "../constants"

const ServerActions = {
  receiveLinks: payload => {
    AppDispatcher.dispatch({
      type: RECEIVE_LINKS,
      payload
    })
  }
}

export default ServerActions