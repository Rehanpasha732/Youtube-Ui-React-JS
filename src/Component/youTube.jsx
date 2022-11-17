import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Playlist from './playlist';
import Videos from './Videos';
import { obj } from '../Utils/object'
import { StepBackwardOutlined } from '@ant-design/icons';
import { StepForwardOutlined } from '@ant-design/icons';
import { MdClear } from 'react-icons/md';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import { AiFillLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';
import { BsReplyAll } from 'react-icons/bs';
import { MdSort } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import add from '../Utils/images/add.png'
function YouTube() {
    const [change, setChange] = useState(0)
    const [data, setData] = useState([])
    const [like, SetLike] = useState(true)
    const [dislike, setDislike] = useState(true)
    const location = useLocation()
    console.log(location)
    function next(params) {
        setChange(change + 1)

    }
    function prev(params) {
        setChange(change - 1)

    }

    function likeIcon(params) {
        SetLike(true)
        setDislike(false)
    }

    function likefill(params) {
        SetLike(false)
        setDislike(false)

    }

    function dislikeIcon(params) {
        setDislike(true)
        SetLike(false)

    }

    function dislikefill(params) {
        setDislike(false)
        SetLike(true)

    }

    let video = [{
        img: "https://i.ytimg.com/vi/7JHV5VZgqZQ/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARgtIFEofzAP&rs=AOn4CLCtf-X1A4E09dSnBYd3xSp2JGHoBQ",
        vid: <Link className='link' state={{ data: data }} to={{ pathname: "https://youtu.be/jr_PxomMGvU" }}>Atif Aslam Mashup | slowed+Reverb | lofi  </Link>
    },

    {
        img: "https://i.ytimg.com/vi/w9i17ykKRpM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAX7a_yFPgGQnusDUi5Bc4WUOCcQg",
        vid: < Link className='link' state={{ data: data }} to={{ pathname: "https://youtu.be/6-n_szx2XRE" }}> Zarori Tha Song By Rahat Fathe Ali Khan Lyrical Video Lyrics By</Link >,
    }
        , {
        img: "https://i.ytimg.com/vi/sYHpxZfkdAs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNfzp_9P0FN90Poq-nmQn4hwXonw",
        vid: < Link className='link' state={{ data: data }} to={{ pathname: "https://youtu.be/6-n_szx2XRE" }}>Main rang sharbaton ka | lyrics video | SD Lyrics | Shahid </Link >

    },
    {
        img: "https://i.ytimg.com/vi/7JHV5VZgqZQ/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARgtIFEofzAP&rs=AOn4CLCtf-X1A4E09dSnBYd3xSp2JGHoBQ",
        vid: <Link className='link' state={{ data: data }} to={{ pathname: "https://youtu.be/jr_PxomMGvU" }}>Atif Aslam Mashup | slowed+Reverb | lofi  </Link>
    },

    ]

    return (

        <>
            <div className="countainer">
                <div className="youtube">
                    <div className="video_player"><ReactPlayer width="730px" playing controls url={location?.pathname} />
                        <button className='button' onClick={next}><StepBackwardOutlined /></button>
                        <button className='button_two' onClick={prev}><StepForwardOutlined /></button>
                        <p className='para'>Jo Tum Na Ho To Hum Bhi hum Nahi. || Shayad - Love Aaj Kal | Kartik | Sara | Arijit Sing | Pritam |</p>

                        <div className="vidoe_info_main">
                            <div className="video_info">
                                <img className='video_info_img' src="https://yt3.ggpht.com/DMvcHYuV3ainPQmbVYD9OGRkgrDWRA_F3e1AKoFLTq0yQ4ZUw5vZwSXjGRY___JtMnbSfrzR=s48-c-k-c0x00ffffff-no-rj" alt="" />
                                <div className="id_name">
                                    <p className='name'>UB HEART SONG</p>
                                    <p className='subs'>
                                        119 subscribers</p>
                                </div>
                                <div className="sub"><p>subscribers</p></div>
                            </div>

                            <div className="likes_share_dots">
                                <div className="likes">
                                    {
                                        like === true ?
                                            <div className='like_icon aifill' onClick={likefill}><AiFillLike /></div> :
                                            <div className='like_icon' onClick={likeIcon}><BiLike /></div>
                                    }
                                    <div className='likes_number'><span >26k</span></div>
                                </div>
                                <div className="dislikes">
                                    {
                                        dislike === true ?

                                            <div className='dislike_icon' onClick={dislikefill}><AiFillDislike /></div> :
                                            <div className='dislike_icon' onClick={dislikeIcon}><AiOutlineDislike /></div>
                                    }

                                </div>
                                <div className="share">
                                    <span className='share_text'>Share</span>
                                    <span><BsReplyAll className='share_icon' /></span>

                                </div>
                                <div className="dots">
                                    <BsThreeDots />
                                </div>
                            </div>
                        </div>

                    </div>
                    <Playlist />

                </div>
                <div className="comments_section">
                    <div className="comment"><p>4,065,926 views  May 15, 2020
                        The first song you play when your heart skips a beat kyunki #Shayad you’re in love!♥️ <span className='comment_id'>#LoveAajKal #KartikAaryan #SaraAliKhan</span>
                    </p></div>

                    <div className="youtube_videos">
                        {video?.map((v, i) => {
                            return (
                                <>
                                    <div className='video_box'>
                                        <div className="youtube_video_img">
                                            <img src={v?.img} alt="" />
                                        </div>
                                        <b>{v?.vid}<span className='video_data'>Lofi Bollywood <br />2.9M views 1 year ago</span></b>
                                    </div>
                                </>
                            )
                        })
                        }
                    </div>
                </div>
                <div className="sort">
                    <div className="sort_comments">52 Comments</div>
                    <div className="sort_icon_div"><MdSort className="sort_icon" /></div>
                    <div className="sort_by">Sort By</div>
                </div>


            </div>
        </>
    )
}

export default YouTube