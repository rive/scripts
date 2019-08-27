# rive react

rive is a tool to generate documents for design languges and design systems. it
is designed for react. features:

-   minimum configuration
-   visual test
-   zero cost

## setup

install packages:

```bash
npm install --save-dev @rive/react react react-dom react-router-dom
```

optional for typescript project:

```bash
npm install --save-dev typescript @types/react @types/react-dom @types/react-router-dom
```

create `tsconfig.json`:

```json
{
    "compilerOptions": {
        "allowJs": true,
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "jsx": "react",
        "lib": ["dom", "dom.iterable", "esnext"],
        "module": "esnext",
        "moduleResolution": "node",
        "noEmit": true,
        "resolveJsonModule": true,
        "skipLibCheck": true,
        "sourceMap": true,
        "strict": true,
        "target": "es5"
    },
    "exclude": ["node_modules", "**/*.spec.ts"]
}
```

create `rive.jsx` or `rive.tsx`:

```jsx
import React from "react";
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
