import React from 'react'
import { configure } from '@storybook/react'

function loadStories() {
  const req = require.context('../src/components', true, /.stories.(ts|tsx)$/)
  req.keys().forEach(req)
}

configure(loadStories, module)
