// file types for webpack loaders

declare module "*.svg" {
    const content: any;
    export default content;
}

declare module "*.md" {
    const content: any;
    export default content;
}

// webpack inline loaders

declare module "!!raw-loader!*" {
    const contents: string;
    export = contents;
}

// packages without type definitions

declare module "react-syntax-highlighter";
declare module "react-syntax-highlighter/*";
declare module "react-docgen";
