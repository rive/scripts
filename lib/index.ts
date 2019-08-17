import config from "./config";
export { default as config } from "./config";
import render from "./render";
export { default as render } from "./render";
import { addPage, page, pages, removePage } from "./pages";
export { addPage, page, pages, removePage } from "./pages";

export default {
    config,
    addPage,
    page,
    pages,
    removePage,
    render
};
