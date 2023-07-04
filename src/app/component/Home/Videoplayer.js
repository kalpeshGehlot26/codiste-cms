import { useEffect, useState } from 'react';

const VideoPlayer = () => {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoContainer = document.getElementById('video-container');
      const rect = videoContainer.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight;
      if (isVisible) {
        setLoadVideo(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check if the video is visible on initial render
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="ratio ratio-16x9" id="video-container">
      {loadVideo && (
        <iframe
          src="https://player.vimeo.com/video/828259341?background=1&autoplay=1"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          webkitAllowFullScreen
          mozAllowFullScreen
          title="Codiste_Home"
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;