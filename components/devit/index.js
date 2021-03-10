import Link from 'next/link'
import { useRouter } from 'next/router'

import Avatar from 'components/Avatar'

import useTimeAgo from 'hooks/useTimeAgo'

export default function Devit ({avatar, userName, content, id, sharedCount, likesCounts, createdAt, img}) {
     const timeAgo = useTimeAgo(createdAt)
     const router = useRouter()


    const handleArticleClick = (event) => {
        event.preventDefault()
        router.push(`/status/${id}`)
    }

    return(
        <>
        <article onClick={handleArticleClick}>
            <div>
                <Avatar src={avatar} alt={userName}/>
            </div>
            <section>
                <header>
                    <strong>{userName}</strong>
                    <span>-</span>
                    <Link  href={`/status/${id}`}>
                        <a>
                            <time>{timeAgo}</time>
                        </a>
                    </Link>
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

            article:hover {
                background: #f5f8fa;
                cursor: pointer;
            }  

            span {
                margin: 0 5px;
            }  

            img {
                border-radius: 10px;
                height: auto;
                width: 100%;
            }

            a {
                color: #555;
                font-size: 14px;
                text-decoration: none;
            }

            a:hover {
                text-decoration: underline;
            }

            time {
                color: #555;
                font-size: 14px;
            }
            
        `}</style>
        </>
    )
}