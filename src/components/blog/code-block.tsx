'use client';

import React, {useEffect} from 'react';
import Prism from 'prismjs';

interface CodeBlockProps {
	className: string;
	children: string;
}

const CodeBlock = (options: CodeBlockProps) => {
	const {className = 'lang-js', children} = options;
	const language = className.replace('lang-', '');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			Prism.highlightAll();
		}
	}, []);

	return (
		<div className="flex flex-col">
			<pre>
				<code className={`language-${language}`}>{children}</code>
			</pre>
		</div>
	);
};

export default CodeBlock;
