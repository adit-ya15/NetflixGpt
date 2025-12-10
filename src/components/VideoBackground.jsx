import React, { useRef, useState } from 'react';
import { auth } from '../utils/Firebase';
import { signOut } from 'firebase/auth';
import useMovie from '../Hooks/useMovie';
import useMovieDetail from '../Hooks/useMovieDetail';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import DetailCard from './DetailCard';
import Footer from './Footer';

const VideoBackground = ({ movieId }) => {

    const videoKey = useMovie(movieId);
    useMovieDetail(movieId);
    
    
    const movieDetails = useSelector(store => store.movies.movieDetail);
    const popularMovies = useSelector((store) => store.movies?.popular);
    const topRatedMovies = useSelector((store) => store.movies?.topRated);

    const moreToWatchRef = useRef(null); 
    const detailsRef = useRef(null);     
    const iframeRef = useRef(null);     
    const containerRef = useRef(null);  

    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

    if (!movieDetails) return <div className="min-h-screen bg-black text-white flex justify-center items-center">Loading...</div>;
    
    const handleSignOut = () => {
        signOut(auth).catch((error) => console.log(error));
    };


    const scrollToMore = () => moreToWatchRef.current?.scrollIntoView({ behavior: 'smooth' });
    const scrollToDetails = () => detailsRef.current?.scrollIntoView({ behavior: 'smooth' });

    const sendCommand = (command, args = null) => {
        if (iframeRef.current) {
            const message = JSON.stringify({
                event: 'command',
                func: command,
                args: args || []
            });
            iframeRef.current.contentWindow.postMessage(message, '*');
        }
    };

    const togglePlay = () => {
        if (isPlaying) {
            sendCommand('pauseVideo');
        } else {
            sendCommand('playVideo');
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        if (isMuted) {
            sendCommand('unMute');
        } else {
            sendCommand('mute');
        }
        setIsMuted(!isMuted);
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };


    return (
        <div className="min-h-screen bg-[#141414] text-white flex flex-col items-center pt-4 md:pt-6 px-4 md:px-8 font-sans selection:bg-red-600 selection:text-white">

            <header className="w-full max-w-[1300px] flex justify-between items-center mb-6 z-20">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-6 md:h-9" />
                <button
                    className="bg-white text-black font-bold px-3 py-1 md:px-4 md:py-1.5 rounded text-xs md:text-sm hover:bg-gray-200 transition"
                    onClick={handleSignOut}
                >
                    Sign Out
                </button>
            </header>

            <div className="hidden md:flex bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.2)] rounded-full p-[3px] backdrop-blur-sm mb-4 shadow-2xl gap-3 z-30 sticky top-4">
                <button 
                    className="px-5 py-1 rounded-full font-medium text-xs md:text-[13px] tracking-wide transition hover:bg-white/10" 
                    onClick={scrollToMore}
                >
                    More to Watch
                </button>
                <button 
                    className="px-5 py-1 rounded-full font-medium text-xs md:text-[13px] text-gray-300 hover:text-white transition hover:bg-white/10" 
                    onClick={scrollToDetails}
                >
                    Detail
                </button>
            </div>

            <div ref={containerRef} className="relative w-full max-w-[1300px] aspect-video md:aspect-[2.2/1] bg-[#000] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-white/10 group z-20">

                <div className="absolute inset-0 w-full h-full">
                    <iframe
                        ref={iframeRef}
                        className="w-full h-full object-cover scale-[1.35] pointer-events-none opacity-80"
                        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoKey}&modestbranding=1&rel=0&showinfo=0&enablejsapi=1`}
                        title="Background Video"
                        allow="autoplay; encrypted-media"
                        frameBorder="0"
                    ></iframe>
                </div>

                <div className="absolute inset-x-0 bottom-0 px-6 py-6 md:px-12 md:py-10 flex items-end justify-between z-20">

                    <div className="flex flex-col items-start max-w-lg">
                        <div className="mb-5 md:mb-7">
                            <h2 className="text-2xl md:text-4xl opacity-90 font-black italic tracking-tighter uppercase leading-[0.9] text-white drop-shadow-2xl">
                                {movieDetails?.original_title}
                            </h2>
                        </div>
                    </div>

                    <div className="flex gap-2 md:gap-3">
                        <ControlBtn icon={isPlaying ? <PauseIcon /> : <PlayIcon />} onClick={togglePlay} />
                        <ControlBtn icon={isMuted ? <VolumeMuteIcon /> : <VolumeUpIcon />} onClick={toggleMute} />
                        <ControlBtn icon={<FullscreenIcon />} onClick={toggleFullscreen} />
                        <ControlBtn icon={<SubtitleIcon />} />
                    </div>

                </div>
            </div>

            <div className='min-h-[167.4px] w-full max-w-[1300px] bg-[#272728] mt-6 md:mt-10 rounded-3xl mb-2 opacity-90 p-8 shadow-lg lg:mt-22'>
                <h1 className='text-2xl font-bold mb-3'>{movieDetails?.original_title}</h1>
                <div className='mb-4 flex gap-3 text-sm text-gray-300 font-medium'>
                    <span className='border border-gray-600 px-2 py-0.5 rounded'>{movieDetails?.release_date?.split('-')[0]}</span>
                    <span className='border border-gray-600 px-2 py-0.5 rounded' >{movieDetails?.genres[0]?.name}</span>
                    {movieDetails?.adult && <span className='text-red-500 border border-red-500 px-2 py-0.5 rounded'>18+</span>}
                </div>
                <div className='text-gray-200 leading-relaxed max-w-7xl text-xl '>
                    {movieDetails.overview}
                </div>
            </div>

            <div ref={detailsRef} className="w-full max-w-[1400px] mt-8">
                <DetailCard movieId={movieId} />
            </div>

            <div ref={moreToWatchRef} className='w-full max-w-[1350px] mt-12 mb-10'>
                <MovieList title="You Might Also Like" movies={popularMovies} />
                <MovieList title="Trending" movies={topRatedMovies} />
            </div>
            
            <Footer />
        </div>
    );
};


const ControlBtn = ({ icon, onClick }) => (
    <button 
        onClick={onClick}
        className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 bg-black/40 hover:bg-black/60 hover:border-white backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 group"
    >
        {icon}
    </button>
);

const PlayIcon = () => <svg fill="white" viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4"><path d="M8 5v14l11-7z" /></svg>;
const PauseIcon = () => <svg fill="white" viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>;
const VolumeUpIcon = () => <svg fill="white" viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>;
const VolumeMuteIcon = () => <svg fill="white" viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" /></svg>;
const FullscreenIcon = () => <svg fill="white" viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" /></svg>;
const SubtitleIcon = () => <svg fill="white" viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 12H9v-2h6v2zm4-4H5V8h14v4z" /></svg>;

export default VideoBackground;