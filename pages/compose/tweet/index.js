import {useState} from 'react';
import useUser from 'hooks/useUser';

import AppLayout from 'components/AppLayout'
import Button from 'components/Button'


export default function ComposeTweet () {
    const user = useUser();
    const [message, setMessage] = useState('')

    const handleChange = (event) => {
        const {value} = event.target
        setMessage(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addDevit({
            
        })
    }


    return(
        <>
            <AppLayout>
                <form onSubmit={handleSubmit}>
                    <textarea
                    placeholder='Que esta pasando?'
                    onChange={handleChange}
                    >
                    </textarea>
                    <div>
                        <Button disabled={message.length === 0} >Devitear</Button>
                    </div>
                </form>
            </AppLayout>
            <style jsx>{`
                textarea {
                    border: 0;
                    font-size: 21px;
                    width: 100%;
                    resize: none;
                    padding: 15px;
                    outline: 0;
                }    

                div {
                    padding: 15px;
                }

            `}</style>
        </>
    )
}