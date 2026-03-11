import { useRef } from 'react';

export default function VideoPlayer() {
  const videoRef = useRef(null);

  return (
    <div className="relative">
      <video ref={videoRef} className="w-full h-full object-cover" loop muted playsInline>
        <source src="../public/video/---Hisense_4K_Demo-_Australia_Scenery_-_YouTube.mp4" type="video/mp4" />
      </video>
      
      <button 
        className="absolute bottom-4 left-4 bg-white/50 px-4 py-2 rounded"
        onClick={() => videoRef.current.play()}
      >
       
      </button>
    </div>
  );
}