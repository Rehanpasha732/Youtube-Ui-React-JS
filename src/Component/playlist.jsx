import React from 'react'
import ReactPlayer from 'react-player' 
import { MdClear } from 'react-icons/md';
import { BiDotsVerticalRounded } from 'react-icons/bi';
function Playlist() {
    return (
        <>
            <div className="play_list">
                <h1>Mix - Lakho Mile Koi Bhi Na Tumsa...</h1>
                <div className="clear">
                    <span>YouTube</span>
                    <MdClear className='clear_icon' />
                </div>
                <div className="dots_div">
                    <BiDotsVerticalRounded className='dot_icon' />
                </div>
                <div className="playlist_vidoes_div">
                    <div className="playlist_All_songs">
                        <div className="playList_videos">
                            <ReactPlayer className="playlist_player" width="120px" autoplay height="60px"  url="https://youtu.be/3YH6e48-BKw" />
                        </div>
                        <div className="text"><p>Lakho Mile Koi Bhi Na Tumsa Mila (Lyrics).. </p></div>
                    </div>

                    <div className="playlist_All_songs">
                        <div className="playList_videos">
                            <ReactPlayer className="playlist_player" width="120px" height="60px" controls url="https://youtu.be/xxoxHtlNQRk" />
                        </div>
                        <div className="text"><p>Lakho Mile Koi Bhi Na Tumsa Mila (Lyrics).. </p></div>
                    </div>
                    <div className="playlist_All_songs">
                        <div className="playList_videos">
                            <ReactPlayer className="playlist_player" width="120px" height="60px" controls url="https://youtu.be/-i3EsYtYpMA" />
                        </div>
                        <div className="text"><p>Lakho Mile Koi Bhi Na Tumsa Mila (Lyrics).. </p></div>
                    </div>

                    <div className="playlist_All_songs">
                        <div className="playList_videos">
                            <ReactPlayer className="playlist_player" width="120px" height="60px" controls url="https://youtu.be/QYM8oav7Ff8" />
                        </div>
                        <div className="text"><p>Lakho Mile Koi Bhi Na Tumsa Mila (Lyrics).. </p></div>
                    </div>

                    <div className="playlist_All_songs">
                        <div className="playList_videos">
                            <ReactPlayer className="playlist_player" width="120px" height="60px" controls url="https://youtu.be/Mc2XRpoypEI" />
                        </div>
                        <div className="text"><p>Lakho Mile Koi Bhi Na Tumsa Mila (Lyrics).. </p></div>
                    </div>

                    <div className="playlist_All_songs">
                        <div className="playList_videos">
                            <ReactPlayer className="playlist_player" width="120px" height="60px" controls url="https://youtu.be/TIkYCcVeAns" />
                        </div>
                        <div className="text"><p>Lakho Mile Koi Bhi Na Tumsa Mila (Lyrics).. </p></div>
                    </div>

                    <div className="playlist_All_songs">
                        <div className="playList_videos">
                            <ReactPlayer className="playlist_player" width="120px" height="60px" controls url="https://youtu.be/NQTTgj7XSDQ" />
                        </div>
                        <div className="text"><p>Lakho Mile Koi Bhi Na Tumsa Mila (Lyrics).. </p></div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Playlist
