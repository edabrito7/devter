import {useEffect, useState} from 'react';

import Applayout from 'components/AppLayout'

import useUser from 'hooks/useUser'

import Devit from 'components/devit';
import { fetchLatestDevits } from 'firebase/client';

export default function HomePage () {
    const [timeline, setTimeline] = useState([]);
    const user = useUser()


    useEffect(() => {
        user && 
        fetchLatestDevits()
        .then(setTimeline)
    }, [user])

    return(
        <>
            <Applayout>
                <header>
                    <h2>Inicio</h2>
                </header>
                <section>
                    {timeline.map((devit) => {
                        return(
                            <Devit
                            key={devit.id}
                            userName={devit.userName}
                            avatar={devit.avatar}
                            content={devit.content}
                            id={devit.id}
                            createdAt={devit.createdAt}
                            likes={devit.likesCount}
                            shared={devit.sharedCount}
                            />
                        )
                    })}
                </section>
                <nav>

                </nav>
            </Applayout>
            <style jsx>{`
                header {
                    align-items: center;
                    background: #ffffffaa;
                    backdrop-filter: blur(5px);
                    display: flex;
                    height: 49px;
                    border-bottom: 1px solid #eee;
                    position: sticky;
                    top: 0;
                    width: 100%;
                }   

                h2 {
                    font-size: 21px;
                    font-weight: 800;
                    padding-left: 15px;
                }
                

                nav {
                    background: #fff;
                    bottom: 0;
                    border-top: 1px solid #eee;
                    position: fixed;
                    height: 49px;
                    width: 100%;
                }
                
            `}</style>
        </>
    )
}