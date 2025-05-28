import QRious from "qrious";

export const generateQRCode = (element: HTMLImageElement, value: string) => {
    const qr = new QRious({
      value,
      size: 200,
      background: "white",
      foreground: "black",
    });
  
    element.src = qr.toDataURL();
  };

  const isPortrait = () => window.innerHeight > window.innerWidth;
  const isMobileUA = () => {
    return (
      /Android|webOS|iPad|iPhone|iPod|Macintosh|Blackberry|IEMobile|Opera Mini/.test(
        navigator.userAgent,
      ) &&
      navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2
    );
  };

  export const isMobileDevice = ():boolean =>
  {
    return !!isMobileUA() && isPortrait();
  };
  
export const removeIOSDoubleTapZoom = () => {
  //remove ios double tap to zoom
  let lastTouchEnd = 0;
  document.addEventListener(
    "touchend",
    (event) => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    },
    false,
  );
};