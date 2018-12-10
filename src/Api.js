import ServerActions from "./redux/actions/ServerActions"
import axios from "axios"

const API = {
  fetchLinks: () => {
    return axios.get("localhost:3003/graphql?query={links{_id,title,url}}")
      .then(resp => {
        ServerActions.receiveLinks(resp.data)
      })
      .catch(err => console.log(err))
  }
}

export {
  API
}