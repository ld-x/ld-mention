# ld-mention
Mention plugin for [last-draft](http://lastdraft.vace.nz)

[![npm version](https://badge.fury.io/js/ld-mention.svg)](https://badge.fury.io/js/ld-mention)

# Install
```jsx
npm install ld-mention --save
```

# Use
```jsx
import {Editor} from 'last-draft'
import mention from 'ld-mention'
let plugins = [mention]

const mentionUsers = [
  {
    name: 'Steven Iseki',
    link: 'https://github.com/steveniseki',
    avatar: 'https://avatars1.githubusercontent.com/u/6695114?v=3&s=400',
  },
  {
    name: 'Nik Graf',
    link: 'https://github.com/nikgraf',
    avatar: 'https://avatars2.githubusercontent.com/u/223045?v=3&s=400',
  }
]

export default class ExampleEditor extends Component {
  constructor(props) {
    super(props)
    const INITIAL_STATE = editorStateFromHtml('<div></div>')
    this.state = { value: INITIAL_STATE }
  }

  onChange(editorState) {
    this.setState({ value: editorState })
  }

  render() {
    return (
      <Editor
        inline={['bold', 'italic', 'code', 'dropcap']}
        blocks={['h2', 'quote']}
        plugins={plugins}
        mentionUsers={mentionUsers}
        editorState={this.state.value}
        onChange={::this.onChange} />
    )
  }
}
```

You can pass your mention users to `mentionUsers` in the Editor, or pass to `mentionUsersAsync` a function that returns the list users for mentions functionality on change of the searchValue.

```jsx
const mentionUsersAsync = function (searchValue, cb) {
  return new Promise(
    (resolve, reject) => {
      let url = `https://api.github.com/search/users?q=${searchValue}`
      fetch(url)
      .then( (response) => { return response.json() })
      .then((data) => {
        let users = data.items.map( (u, i) => { return { name: u.login, link: u.html_url, avatar: u.avatar_url } })
        resolve({ mentionUsers: users })
      })
    }
  )
}
```

## Styles

Last Draft plugins use styled-components 💅 for the base styling.

## Custom Styles with CSS

You can also add custom css to override the base styling with the following class names specified below:

```css
.ld-mention-wrapper {}
.ld-mention {}
.ld-mention-list {}
.ld-mention-autocomplete {}
.ld-mention-menu {}
.ld-mention-menu-list {}
.ld-mention-item {}
.ld-mention-avatar {}
.ld-mention-name {}
```
