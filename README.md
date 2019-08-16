# rive

rive is a tool to generate documents for design languges and design systems.

- minimum configuration
- visual test
- zero cost

## setup

install `rive` package:

```bash
npm install --save-dev rive
```

create `rive.jsx`:

```jsx
import rive from 'rive';
import Markdown from 'react-markdown';
import about from './docs/about.md';
import ButtonDoc from './components/button/doc';
import ButtonDefault from './components/button/cases/default';

rive.config({
    name: 'FDL',
    description: 'Foobar Design Language',
    copyright: '2019-2091 Nobody'
});

// Add Markdown as page
rive.addPage({ path: '/about', title: 'About', content: <Markdown source={about} /> });

// Add React component as page
rive.addPage({ path: '/components/button', title: 'Button', content: <ButtonDoc /> });

// Add visual test case
rive.addCase({ path: '/components/button/default', content: <ButtonDefault /> });
```

modify `package.json`

```json
{
    "scripts": {
        "start": "rive start",
        "build": "rive build",
        "test": "rive test",
    }
}
```

let's go!

```bash
npm run start
```
