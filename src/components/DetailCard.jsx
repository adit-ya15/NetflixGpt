import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants'; // Ensure you have your headers here

const MoreDetails = ({ movieId }) => {
    const movieDetails = useSelector(store => store.movies.movieDetail);
    const [credits, setCredits] = useState(null);
    const [keywords, setKeywords] = useState(null);

    useEffect(() => {
        if (!movieId) return;

        const fetchExtraDetails = async () => {
            try {
                const creditsData = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
                    API_OPTIONS
                );
                const creditsJson = await creditsData.json();
                setCredits(creditsJson);

                const keywordsData = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/keywords`,
                    API_OPTIONS
                );
                const keywordsJson = await keywordsData.json();
                setKeywords(keywordsJson);
            } catch (error) {
                console.error("Failed to fetch extra details:", error);
            }
        };

        fetchExtraDetails();
    }, [movieId]);

    if (!movieDetails) return null;

    const genreList = movieDetails.genres?.map(g => g.name).join(', ') || "N/A";

    const audioList = movieDetails.spoken_languages?.map(l => l.english_name).join(', ') || "English [Original]";

    const castList = credits?.cast?.slice(0, 10).map(c => c.name).join(', ') || "N/A";

    const keywordsList = keywords?.keywords?.slice(0, 8).map(k => k.name).join(', ') || "Exciting, Action-Packed";

    return (
        <div className="bg-[#141414] px-4 md:px-12 py-10 w-full">
            <div className="max-w-[1300px] mx-auto">
                <h2 className="text-white text-2xl font-bold mb-6">More Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">

                    <div className="bg-[#2f2f2f] p-6 rounded-lg h-full">
                        <div className="mb-6">
                            <h3 className="text-gray-400 font-medium text-sm mb-1">Watch offline</h3>
                            <p className="text-white text-sm">Available to download</p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-gray-400 font-medium text-sm mb-1">Genres</h3>
                            <p className="text-white text-sm leading-relaxed">{genreList}</p>
                        </div>

                        <div>
                            <h3 className="text-gray-400 font-medium text-sm mb-1">This movie is...</h3>
                            <p className="text-white text-sm leading-relaxed capitalize">{keywordsList}</p>
                        </div>
                    </div>

                    <div className="bg-[#2f2f2f] p-6 rounded-lg h-full">
                        <div className="mb-6">
                            <h3 className="text-gray-400 font-medium text-sm mb-1">Audio</h3>
                            <p className="text-white text-sm leading-relaxed">
                                {audioList}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-gray-400 font-medium text-sm mb-1">Subtitles</h3>
                            <p className="text-white text-sm leading-relaxed">
                                English, Hindi, Tamil, Telugu
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#2f2f2f] p-6 rounded-lg h-full">
                        <div>
                            <h3 className="text-gray-400 font-medium text-sm mb-1">Cast</h3>
                            <p className="text-white text-sm leading-relaxed">
                                {castList}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MoreDetails;