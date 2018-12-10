import AppDispatcher from "../AppDispatcher"
import { RECEIVE_LINKS } from "../constants"
import { EventEmitter } from "events"

let initialState = {
  links: []
}

class LinkStore extends EventEmitter {
  constructor(props) {
    super(props)

    AppDispatcher.register(({type, payload}) => {
      switch(type) {
        case RECEIVE_LINKS:
          initialState.links = payload
          this.emit("change")
          break
        default: break
      }
    })
  }

  getAll() {
    return initialState
  }
}

export default new LinkStore()