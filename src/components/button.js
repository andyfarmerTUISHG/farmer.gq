import React from "react"
import PropTypes from "prop-types"

function button({ buttonText }) {
  return <button className="button">{buttonText}</button>
}

button.propTypes = {
  buttonText: PropTypes.string.isRequired,
}
export default button
