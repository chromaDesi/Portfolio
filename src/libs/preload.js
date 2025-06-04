export const preloadSplineScene = () => {
    return new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'fetch';
        link.href = '/destiny.spline';
        link.crossOrigin = 'anonymous';
        link.onload = resolve;
        document.head.appendChild(link);
    });
};

export const preloadAssets = async () => {
    await preloadSplineScene();
}; 