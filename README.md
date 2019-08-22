# rive react

rive is a tool to generate documents for design languges and design systems. it
is designed for react. features:

-   minimum configuration
-   visual test
-   zero cost

## setup

install `@rive/react` package:

```bash
npm install --save-dev @rive/react
```

create `rive.jsx` or `rive.tsx`:

```jsx
import rive from "@rive/react";
import ButtonDoc from "./components/button/doc";
import ButtonDefault from "./components/button/cases/default";

rive.config({
    name: "FDL",
    description: "Foobar Design Language",
    copyright: "2019-2091 Nobody"
});

// Add Markdown as page
rive.addPage({
    path: "/about",
    title: "About",
    component: () => <div>Foo is not Bar.</div>
});

// Add React component as page
rive.addPage({
    path: "/components/button",
    title: "Button",
    component: ButtonDoc
});

// Add visual test case
rive.addCase({
    path: "/components/button/default",
    title: "Default Button",
    component: ButtonDefault,
    width: 300,
    height: 100
});

rive.render();
```

modify `package.json`

```json
{
    "scripts": {
        "start": "rive-react start",
        "build": "rive-react build",
        "test": "rive-react test"
    }
}
```

let's go!

```bash
npm run start
```
