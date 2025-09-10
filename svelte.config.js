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
                if (lang === 'html-render') { // 新增这个条件
                    return code; // 直接返回HTML代码让它渲染
                }
                return hljs.highlight(code, { language: lang }).value;
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