import { ComponentType } from "react";

export interface PageData {
    /** react router path, must be unique */
    path: string;
    /** any kind of react content to render */
    component: ComponentType;
    /** page title. will be part of html title, too */
    title?: string;
    /** control viewport for visual tests */
    width?: number;
    /** control viewport for visual tests */
    height?: number;
}

const mPagesData: { [path: string]: PageData } = {};

export function pages(): PageData[] {
    return Object.values(mPagesData);
}

export function page(path: string): PageData {
    return mPagesData[path];
}

export function addPage(pageData: PageData) {
    mPagesData[pageData.path] = pageData;
}

export function removePage(path: string) {
    delete mPagesData[path];
}
