import React, {Component} from 'react'

export class TextUI extends Component {
  render () {
    let texts = this.props.texts.map((text, index) => (
      <p key={index}>
        {text}
      </p>
    ))

    return (
      <section className='text-ui'>
        {texts}
      </section>
    )
  }
}
