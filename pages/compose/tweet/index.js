import {useState} from 'react';
import useUser from 'hooks/useUser';

import AppLayout from 'components/AppLayout'
import Button from 'components/Button'

import { useRouter } from 'next/router'

import { addDevit } from 'firebase/client'

const COMPOSE_STATES = {
    USER_NOT_KNOW: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1
}

export default function ComposeTweet () {
    const user = useUser();
    const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW);
    const [message, setMessage] = useState('')
    const router = useRouter()

    const handleChange = (event) => {
        const {value} = event.target
        setMessage(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setStatus(COMPOSE_STATES.LOADING)
        addDevit({
            avatar: user.avatar,
            content: message,
            userUid: user.uid,
            userName: user.userName,
        }).then(
            router.push('/home')
        ).catch(err => {
            setStatus(COMPOSE_STATES.ERROR)
            console.error(err)
        })
    }

    const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

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
                        <Button disabled={isButtonDisabled} >Devitear</Button>
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