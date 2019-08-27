import { ComponentType } from "react";

export interface Page {
    /** react router path, must be unique */
    path: string;
    /** any kind of react content to render */
    component: ComponentType;
    /** page title. will be part of html title, too */
    title: string;
    /** control viewport for visual tests */
    width?: number;
    /** control viewport for visual tests */
    height?: number;
    /** nested pages */
    children?: Page[];
}

const pageStore: { [path: string]: Page } = {};

/**
 * get pages in nested structure.
 */
export function getPages(): Page[] {
    return Object.keys(pageStore)
        .filter(path => path.lastIndexOf("/") === 0)
        .map(getPage);
}

/**
 * get pages in flatten structure.
 */
export function getPagesFlat(): Page[] {
    return Object.values(pageStore);
}

/**
 * get page with nested children.
 *
 * @param path router path to the page
 */
export function getPage(path: string): Page {
    const page = pageStore[path];
    page.children = Object.keys(pageStore)
        .filter(
            p => p.indexOf(path) === 0 && p.lastIndexOf("/") === path.length
        )
        .map(p => getPage(p));
    return page;
}

/**
 * search pages and return pages in nested structure. if the children match
 * query, parent pages will also be returned. if query is empty, return all pages.
 *
 * @param query search query
 */
export function searchPages(query: string): Page[] {
    const pages = getPages();
    const keywords = query
        .trim()
        .toLocaleLowerCase()
        .split(" ");
    if (keywords) {
        return depthFilter(pages, keywords);
    } else {
        return pages;
    }
}

/**
 * depth filter pages
 *
 * @param pages page tree to be searched
 * @param keywords keywords array
 */
function depthFilter(pages: Page[], keywords: string[]): Page[] {
    return pages
        .filter(p => depthSearch(p, keywords))
        .map(p => ({
            ...p,
            children: p.children ? depthFilter(p.children, keywords) : []
        }));
}

/**
 * depth search a page
 *
 * @param page page to be search
 * @param keywords keywords array
 */
function depthSearch(page: Page, keywords: string[]): boolean {
    const result = keywords.reduce(
        (pv: boolean, cv) => pv && page.title.toLocaleLowerCase().includes(cv),
        true
    );

    if (result) {
        return true;
    }

    if (page.children) {
        return page.children.reduce(
            (pv: boolean, cv) => pv || depthSearch(cv, keywords),
            false
        );
    }

    return false;
}

/**
 * add new page into store. path must be unique. otherwise, new page will
 * override old page. please don't add children pages along with parent.
 *
 * @param page page data
 */
export function addPage(page: Page) {
    pageStore[page.path] = page;
}

/**
 * remove a page at specific location.
 *
 * @param path page path
 */
export function removePage(path: string) {
    delete pageStore[path];
}
