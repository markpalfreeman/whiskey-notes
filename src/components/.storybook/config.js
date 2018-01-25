import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'Whiskey Notes'
})

// import all component stories
const req = require.context('../', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
