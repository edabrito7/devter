import {useEffect, useState} from 'react';
import Link from 'next/link'

import Applayout from 'components/AppLayout'

import useUser from 'hooks/useUser'

import Devit from 'components/devit';
import { fetchLatestDevits } from 'firebase/client';
import CreateIcon from 'components/Icons/create';
import HomeIcon from 'components/Icons/HomeIcon';
import SearchIcon from 'components/Icons/search';
import Head from 'next/head';

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
            <Head>
                <title>Inicio / Home</title>
            </Head>
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
                            img={devit.img}
                            createdAt={devit.createdAt}
                            likes={devit.likesCount}
                            shared={devit.sharedCount}
                            />
                        )
                    })}
                </section>
                <nav>
                    <Link href='/home'>
                        <a>
                            <HomeIcon width={32} height={32} stroke='#09f'/>
                        </a>
                    </Link>
                    <Link href='/compose/tweet'>
                        <a>
                            <CreateIcon width={32} height={32} stroke='#09f'/>
                        </a>
                    </Link>
                    <Link href='/compose/tweet'>
                        <a>
                            <SearchIcon width={32} height={32} stroke='#09f'/>
                        </a>
                    </Link>
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
                    display: flex;
                    position: fixed;
                    height: 49px;
                    width: 100%;
                }

                nav a {
                    align-items: center;
                    display: flex;
                    flex: 1 1 auto;
                    height: 100%;
                    justify-content: center;
                }

                nav a:hover {
                    background: radial-gradient(#0099ff33 15%, transparent 16%);
                    background-size: 180px 180px;
                    background-position: center;
                }

                section {
                    flex: 1;
                }
                
            `}</style>
        </>
    )
}