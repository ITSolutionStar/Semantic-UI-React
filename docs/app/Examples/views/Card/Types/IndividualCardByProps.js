import React from 'react'
import { Card, Icon } from 'stardust'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const IndividualCardByProps = () => (
  <Card
    image='http://semantic-ui.com/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
)

export default IndividualCardByProps
