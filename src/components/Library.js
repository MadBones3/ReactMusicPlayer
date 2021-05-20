import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {/* loops over each song and create a component for each one*/}
                {songs.map((song) => (
                    <LibrarySong songs={songs} setCurrentSong={setCurrentSong} song={song} id={song.id} key={song.id} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} />
                ))}
            </div>
        </div>
    )
}

export default Library;