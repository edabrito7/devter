import Avatar from 'components/Avatar'

export default function Devit ({avatar, userName, content, id, sharedCount, likesCounts, createdAt}) {
    return(
        <>
        <article>
            <div>
                <Avatar src={avatar} alt={userName}/>
            </div>
            <section>
                <header>
                    <strong>{userName}</strong>
                    <date>{createdAt}</date>
                </header>
                <p>{content}</p>
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
            
        `}</style>
        </>
    )
}