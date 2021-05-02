import ReactMarkdown from "react-markdown";
import React from "react";

const textProcessor = (text: string) => <ReactMarkdown>{text}</ReactMarkdown>;

export default textProcessor;
