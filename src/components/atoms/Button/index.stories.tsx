import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '.'

storiesOf('Atoms/Button', module).add('default', () => (
  <Button>Caption is here!</Button>
))
