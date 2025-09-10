import { writable } from 'svelte/store';

// 创建主题 store
function createTheme() {
    // 默认是深色模式，与现有样式保持一致
    const defaultTheme = 'dark';
    
    // 尝试从 localStorage 读取保存的主题
    let initialTheme = defaultTheme;
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('edoc-theme');
        if (saved) {
            initialTheme = saved;
        }
    }
    
    const { subscribe, set, update } = writable(initialTheme);
    
    return {
        subscribe,
        set,
        // 切换主题
        toggle: () => update(current => {
            const newTheme = current === 'dark' ? 'light' : 'dark';
            
            // 保存到 localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('edoc-theme', newTheme);
                // 设置 body 的 data-theme 属性
                document.body.setAttribute('data-theme', newTheme);
            }
            
            return newTheme;
        }),
        // 初始化主题
        init: () => {
            if (typeof window !== 'undefined') {
                const saved = localStorage.getItem('edoc-theme') || defaultTheme;
                document.body.setAttribute('data-theme', saved);
                set(saved);
            }
        }
    };
}

export const theme = createTheme();