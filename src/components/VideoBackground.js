function VideoBackground() {
    return (
        <video autoPlay loop muted playsInline className="video-bg">
            <source src="/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}

export default VideoBackground;
