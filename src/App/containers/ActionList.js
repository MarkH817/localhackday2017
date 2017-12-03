import {connect} from 'react-redux'
import {Actions} from '../components'
import {texts} from '../../State/actions'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    onAddText: t => dispatch(texts.addEntry(t))
  }
}

export const ActionList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Actions)
