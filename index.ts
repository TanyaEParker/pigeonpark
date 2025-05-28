import { initialize } from "@zcomponent/three";
import { default as Scene } from "./_MainPark/Scene.zcomp";
import {generateQRCode,isMobileDevice,removeIOSDoubleTapZoom} from "./utils";

const isMobile:boolean = isMobileDevice();
const [MobileSplash,DesktopSplash] = [document.getElementById('MobileSplash'),document.getElementById('DesktopSplash')];

const toggleSplashDisplays = (isMobile:boolean)=>
{
    if(MobileSplash instanceof HTMLDivElement && DesktopSplash instanceof HTMLDivElement)
    { 
        MobileSplash.style.display = isMobile ? 'block' : 'none';
        DesktopSplash.style.display = isMobile ? 'none' : 'flex';
    }
}

if(isMobile)
{
    removeIOSDoubleTapZoom();
    initialize(Scene,
    {},
    {
        launchButton: document.getElementById('launchButton')
    });
}
else
{
    const currentAppUrl = window.location.href;
    const QR = document.getElementById('QR');
    const CurrentURL = document.getElementById('CurrentURL');
    if(CurrentURL instanceof HTMLSpanElement){CurrentURL.innerText = currentAppUrl};
    
    if(QR instanceof HTMLImageElement)
    {
        generateQRCode(QR,currentAppUrl);
    };
};

toggleSplashDisplays(isMobile);


