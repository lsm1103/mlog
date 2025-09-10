import sveltePreprocess from 'svelte-preprocess';
import { markdown } from 'svelte-preprocess-markdown';
import hljs from 'highlight.js';

export default {
    preprocess: [
        sveltePreprocess(),
        markdown({
            highlight(code, lang) {
                if (lang === 'mermaid') {
                    return `<pre class="mermaid">${code}</pre>`;
                }
                if (lang === 'html-render') {
                    // 处理html-render为html代码，但添加特殊类名
                    const highlighted = hljs.highlight(code, { language: 'html' }).value;
                    return `<span class="html-render-marker"></span>${highlighted}`;
                }
            },
        }),
    ],
    useVitePreprocess: true,
    sendWarningsToBrowser: true,
    extensions: ['.svelte', '.md'],
    onwarn: (warning, handler) => {
        if (warning.code.startsWith('a11y')) return;
        handler(warning);
    },
    compatibility: {
        componentApi: '4'
    }
};