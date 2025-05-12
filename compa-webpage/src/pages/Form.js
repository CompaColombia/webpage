import { useEffect, useRef } from 'react';

export default function Form() {
    const iframeRef = useRef(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        iframe.addEventListener('load', () => {
            window.scrollTo(0, 0);
            if (window.jotformEmbedHandler) {
                window.jotformEmbedHandler("iframe[id='JotFormIFrame-250707875087669']", "https://form.jotform.com/");
            }
        });

        return () => {
            iframe.removeEventListener('load', () => {});
        };
    }, []);

    return (
        <iframe
            id="JotFormIFrame-250707875087669"
            title="Plantilla de Contacto"
            allow="geolocation; microphone; camera; fullscreen"
            src="https://form.jotform.com/250707875087669"
            frameborder="0"
            ref={iframeRef}
            style={{ minWidth: '100%', maxWidth: '100%', height: '100vh', border: 'none' }}
            scrolling="no"
        />
    );
}
