import Applayout from 'components/AppLayout'
import Devit from 'components/devit'

export default function DevitPage(props) {

    console.log('ID', props)
    return(
        <>
            <Devit {...props}/>
        </>
    )
}


export async function getServerSideProps (context) {
    const { params, res} = context
    const { id } = params
    const apiResponse = await fetch(`http://localhost:3000/api/devits/${id}`)
    if (apiResponse.ok) {
        const props = await apiResponse.json()
        return {props}
    }
    if(res) {
                res.writeHead(404).end()
    }
}

