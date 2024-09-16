/**
 * A React component for editing and rendering Markdown.
 *
 * @component
 * @returns {JSX.Element} The MarkdownEditor component.
 */
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('Type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />

            <div>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownEditor;


const reverseSentence = (sentence) => {
    const reversed = sentence.split('').reverse().join('');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
};

const sentence = "Hello, world!";
const reversedSentence = reverseSentence(sentence);
console.log(reversedSentence);
