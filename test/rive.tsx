import React from "react";
import Markdown from "react-markdown";
import rive from "../lib";

import about from "./about.md";
import "./rive.scss";

rive.config({
    name: "FDL",
    description: "Foobar Design Language",
    copyright: "2019-2091 Nobody"
});

rive.addPage({
    path: "/about",
    title: "About",
    component: () => <Markdown source={about} />
});

rive.render();
