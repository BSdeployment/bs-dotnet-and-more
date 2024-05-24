export function sizepage() {
    const iframe = document.getElementById('hosted-iframe');

    function resizeIframe() {
        const iframeContent = iframe.contentWindow.document.body;
        iframe.style.height = `${iframeContent.scrollHeight}px`;
    }

    iframe.addEventListener('load', resizeIframe);
    window.addEventListener('load', resizeIframe);
    window.addEventListener('resize', resizeIframe);



}
