import React, { Component } from "react"
import { API } from "../../Api"
import LinkStore from "../../redux/store/LinkStore"

const getAppState = () => {
  return {
    links: LinkStore.getAll().links
  }
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      links: getAppState()
    }
  }
  
  componentDidMount() {
    API.fetchLinks(`{
      links: {
        _id,
        title,
        url 
      }
    }`)
    LinkStore.on("change", this.onChange)
  }

  componentWillUnmount() {
    LinkStore.removeListener("change", this.onChange)
  }

  onChange = () => {
    this.setState(getAppState())
  }

  render() {
    const { links } = this.state
    return (
      <div>
        <h3>Links</h3>
        {
          links && links.length > 0
            && <ul>
              {
                links.map(link => (
                  <li key={link["_id"]}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))
              }
            </ul>
        }
      </div>
    )
  }

}

export default Main