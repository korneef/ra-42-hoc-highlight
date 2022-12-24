import React from "react"

export default function withNewAndPopular(Component) {
  return class extends React.Component {
    render() {
      if (this.props.views < 100) {
        return (
          <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            <Component {...this.props} />
          </div>
        )
      }

      if (this.props.views > 1000) {
        return (
          <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            <Component {...this.props} />
          </div>
        )
      }

      return <Component {...this.props} />
    }
  }
}