
import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

import { bgColor } from '../styles/common'

class Level extends Component {
  render () {
    const { level, changeLevel } = this.props

    return (
      <TouchableHighlight style={styles.container} onPress={changeLevel} underlayColor={bgColor}>
        <Text style={styles.level}>
          {this.getLevelName()} ({level})
        </Text>
      </TouchableHighlight>
    )
  }

  getLevelName () {
    const { level } = this.props

    switch (level) {
      case 4: return 'beginner'
      case 8: return 'normal'
      case 12: return 'hard'
      case 16: return 'impossible'
    }

    return 'unknown'
  }
}

Level.propTypes = {
  level: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  level: {
    color: 'saddlebrown',
    fontSize: 15,
    fontWeight: '500'
  }
})

export default Level
