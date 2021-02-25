import Avatar from 'components/Avatar'

export default function Devit ({avatar, username, message, id}) {
    return(
        <>
        <article>
            <div>
                <Avatar src={avatar} alt={username}/>
            </div>
            <section>
                <strong>{username}</strong>
                <p>{message}</p>
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