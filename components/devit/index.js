import Avatar from 'components/Avatar'

import useTimeAgo from 'hooks/useTimeAgo'

export default function Devit ({avatar, userName, content, id, sharedCount, likesCounts, createdAt, img}) {
     const timeAgo = useTimeAgo(createdAt)

    return(
        <>
        <article>
            <div>
                <Avatar src={avatar} alt={userName}/>
            </div>
            <section>
                <header>
                    <strong>{userName}</strong>
                    <span>-</span>
                    <date>{timeAgo}</date>
                </header>
                <p>{content}</p>
                {img && <img src={img}/>}
                <div>
                    <span>{sharedCount}</span>
                    <span>{likesCounts}</span>
                </div>
            </section>
        </article>

        <style jsx>{`

            div {
                padding-right: 10px;
            }
            article {
                border-bottom: 2px solid #eaf7ff;
                    display: flex;
                    padding: 10px 15px;
            }   

            span {
                margin: 0 5px;
            }  

            img {
                border-radius: 10px;
                height: auto;
                width: 100%;
            }

            date {
                color: #555;
                font-size: 14px;
            }
            
        `}</style>
        </>
    )
}