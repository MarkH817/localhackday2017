import {connect} from 'react-redux'
import {TextUI} from '../components'

function mapStateToProps (state) {
  return {
    texts: state.texts
  }
}

export const TextLog = connect(
  mapStateToProps
)(TextUI)
