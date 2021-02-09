import Link from "next/link";

export default function Timeline ({ userName }) {
    return(
        <>
        <h1>This is timeline of {userName}</h1>
        <Link href='/'>
            <a>Go Home</a>
        </Link>
        </>
    )
}



Timeline.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(response => {
        console.log(response)
        const {userName} = response;
        return {userName}
    })
}