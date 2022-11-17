// import React, { useState } from 'react'

// import { LikeOutlined, LikeFilled, DislikeOutlined, DislikeFilled } from '@ant-design/icons';
// const Comments = () => {
//     const [likes, setLikes] = useState(true)
//     const [dislike, setDislikes] = useState(true)
//     const [lik, setLik] = useState(true)
//     const [dislik, setDislik] = useState(true)
//     const [likees, setLikees] = useState(true)
//     const [dislikes, setDislike] = useState(true)
   
//     const like = () => {
//         setLikes(false)
//         setDislikes(true)
//     }
//     const dis = () => {
//         setLikes(true)
//         setDislikes(true)
//     }
//     const disl = () => {
//         setDislikes(false)
//         setLikes(true)
//     }
//     const disli = () => {
//         setDislikes(true)
//         setLikes(true)
//     }
//     const lik1 = () => {
//         setLik(false)
//         setDislik(true)
//     }
//     const dis1 = () => {
//         setLik(true)
//         setDislik(true)
//     }
//     const dis2 = () => {
//         setDislik(false)
//         setLik(true)
//     }
//     const dis3 = () => {
//         setDislik(true)
//         setLik(true)
//     }
//     const like1 = () => {
//         setLikees(false)
//         setDislike(true)
//     }
//     const disl1 = () => {
//         setLikees(true)
//         setDislike(true)
//     }
//     const disl2 = () => {
//         setDislike(false)
//         setLikees(true)
//     }
//     const disl3 = () => {
//         setDislike(true)
//         setLikees(true)
//     }
//     return (
//         <>
//             {/* <div className='comments'>
//                 <p>71 Comments</p>
//                 <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon"><g className="style-scope yt-icon"><path d="M21,6H3V5h18V6z M15,11H3v1h12V11z M9,17H3v1h6V17z" className="style-scope yt-icon"></path></g></svg>
//                 <p>Sort by</p>
//             </div> */}
//             <div className='comment_div'>
//                 <img id="imgs" draggable="false" alt="Zain Ali" height="40" width="40" src="https://yt3.ggpht.com/ytc/AMLnZu-O-8JeWVxUyJ2oCDB8KNyd5oh6Ri2OlsE2IxjL7LpKjZPMAAvPaZSORPEo_kDK=s88-c-k-c0x00ffffff-no-rj" />
//                 <input type="text" placeholder='Add A Comment' />
//             </div>
//             <div className='main_comment_div'>
//                 <div className='comments_div'>
//                     <img id="imgs" draggable="false" alt="Zain Ali" height="40" width="40" src="https://yt3.ggpht.com/ytc/AMLnZu-O-8JeWVxUyJ2oCDB8KNyd5oh6Ri2OlsE2IxjL7LpKjZPMAAvPaZSORPEo_kDK=s88-c-k-c0x00ffffff-no-rj" />
//                     <p className='name'>Zain</p>
//                     <p className='hour'>✔ 13 hours ago</p>
//                 </div>
//                 <p className='comen'>Nice 🙂🙂🙂</p>
//                 <div className='comment_likes' style={{ display: 'flex' }}>
//                     {likees === true || dislikes !== true ?
//                         <span className='like_icon' onClick={like1}><LikeOutlined /> </span>
//                         :
//                         <span className='like_icon' onClick={disl1}><LikeFilled /></span>
//                     }
//                     <span>120</span>
//                     {dislikes === true || likees !== true ?
//                         <span className='x' onClick={disl2} ><DislikeOutlined /></span>
//                         :
//                         <span className='x' onClick={disl3}><DislikeFilled /></span>
//                     }
//                     <div>Reply</div>
//                 </div>
//             </div>
//             <div className='main_comment_div'>
//                 <div className='comments_div'>
//                     <img id="imgs" draggable="false" alt="Zain Ali" height="40" width="40" src="https://yt3.ggpht.com/aPEEJ_bAo-H95RBFGTcXx29K-e5ItjKVIOrk-2bDNtM3kAbAaNOR1R70PwaVx75gWcmHm1PBTg=s88-c-k-c0x00ffffff-no-rj" />
//                     <p className='name'>Zain</p>
//                     <p className='hour'>✔ 13 hours ago</p>
//                 </div>
//                 <p className='comen'>Nice 🙂🙂🙂</p>
//                 <div className='comment_likes' style={{ display: 'flex' }}>
//                     {likes === true || dislike !== true ?
//                         <span className='like_icon' onClick={like}><LikeOutlined /> </span>
//                         :
//                         <span className='like_icon' onClick={dis}><LikeFilled /></span>
//                     }
//                     <span>120</span>
//                     {dislike === true || likes !== true ?
//                         <span className='x' onClick={disl} ><DislikeOutlined /></span>
//                         :
//                         <span className='x' onClick={disli}><DislikeFilled /></span>
//                     }
//                     <div>Reply</div>
//                 </div>
//             </div>
//             <div className='main_comment_div'>
//                 <div className='comments_div'>
//                     <img id="imgs" draggable="false" alt="Zain Ali" height="40" width="40" src="https://yt3.ggpht.com/Z7lJ5IW4cxnfrofD_9HYrQvwPV_288N6xhK6UedLkOXrFq-0P_2uShQldiic3kDypdpJqsfYndc=s88-c-k-c0x00ffffff-no-rj" />
//                     <p className='name'>Zain</p>
//                     <p className='hour'>✔ 13 hours ago</p>
//                 </div>
//                 <p className='comen'>Nice 🙂🙂🙂</p>
//                 <div className='comment_likes' style={{ display: 'flex' }}>
//                     {lik === true || dislik !== true ?
//                         <span className='like_icon' onClick={lik1}><LikeOutlined /> </span>
//                         :
//                         <span className='like_icon' onClick={dis1}><LikeFilled /></span>
//                     }
//                     <span>120</span>
//                     {dislik === true || lik !== true ?
//                         <span className='x' onClick={dis2} ><DislikeOutlined /></span>
//                         :
//                         <span className='x' onClick={dis3}><DislikeFilled /></span>
//                     }
//                     <div>Reply</div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Comments
