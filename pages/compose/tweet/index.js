import {useEffect, useState} from 'react';
import useUser from 'hooks/useUser';

import AppLayout from 'components/AppLayout'
import Button from 'components/Button'
import Avatar from 'components/Avatar'

import { useRouter } from 'next/router'

import { addDevit, uploadImage } from 'firebase/client'
import Head from 'next/head';

const COMPOSE_STATES = {
    USER_NOT_KNOW: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1
}

const DRAG_IMAGE_STATES = {
    ERROR: -1,
    NONE: 0,
    DRAG_OVER: 1,
    UPLOADING: 2,
    COMPLETE: 3,
}

export default function ComposeTweet () {
    const user = useUser();
    const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW);
    const [message, setMessage] = useState('')

    const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
    const [task, setTask] = useState(null)
    const [imgURL, setImgURL] = useState(null)
    const router = useRouter()

    

    useEffect(() => {
        if(task) {
            let onProgress = () => {}
            let onError = () => {}
            let onComplete = () => {
                console.log('onComplete',task.snapshot.ref)
                task.snapshot.ref.getDownloadURL().then((url) =>{
                    console.log(url)
                    setImgURL(url)
                })
            }
            task.on('state_changed', 
            onProgress,
            onError,
            onComplete
            )
        }
    }, [task])

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
            img: imgURL,
            userUid: user.uid,
            userName: user.userName,
        }).then(
            router.push('/home')
        ).catch(err => {
            setStatus(COMPOSE_STATES.ERROR)
            console.error(err)
        })
    }

    const handleDragEnter = e => {
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
    }


    const handleDragLeave = e => {
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.NONE)
    }

    const handleDrop = e => {
        e.preventDefault()
        console.log(e)
        const file = e.dataTransfer.files[0]
        setDrag(DRAG_IMAGE_STATES.NONE)
        const task = uploadImage(file)
        setTask(task)
    }

    const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

    return(
        <>
            <Head>
                <title>Crear Devit / Tweet</title>
            </Head>
            <AppLayout>
                <section className='form-container'>
                    <div className='avatar-container'>
                        <Avatar src={user?.avatar}/>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <textarea
                        placeholder='Que esta pasando?'
                        onChange={handleChange}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        >
                        </textarea>
                        {imgURL && 
                            <figure className='remove-img'>
                                <button onClick={() => setImgURL(null)}>X</button>
                                <img src={imgURL} alt='image uploaded'/>
                            </figure>
                        }
                        <div className='button-container'>
                            <Button disabled={isButtonDisabled} >Devitear</Button>
                        </div>
                    </form>
                </section>
                
            </AppLayout>
            <style jsx>{`

                form {
                    margin: 10px;
                }
                textarea {
                    border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER ? '3px dashed #09f' : '3px solid transparent'};
                    font-size: 21px;
                    min-height: 200px;
                    width: 100%;
                    resize: none;
                    padding: 15px;
                    outline: 0;
                }    

                div {
                    padding: 15px;
                }

                .form-container {
                    align-items: flex-start;
                    display: flex;
                }

                .remove-img {
                    position: relative;
                }
                button {
                    background: rgba(25, 25, 25, 0.3);
                    border: 0;
                    color: #fff;
                    font-size: 24px;
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    width: 32px;
                    height: 32px;
                    border-radius: 999px;

                }
                img {
                    border-radius: 10px;
                    height: auto;
                    width: 100%;
                }

            `}</style>
        </>
    )
}