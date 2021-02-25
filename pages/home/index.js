import {useEffect, useState} from 'react';

import Applayout from 'components/AppLayout'
import Avatar from 'components/Avatar'
import Devit from 'components/devit';

export default function HomePage () {
    const [timeline, setTimeline] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/api/statuses/_home_timeline')
            .then(res => res.json())
            .then(setTimeline)
    }, [])
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
                            username={devit.username}
                            avatar={devit.avatar}
                            message={devit.message}
                            id={devit.id}
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
                    display: flex;
                    height: 49px;
                    border-bottom: 1px solid #ccc;
                    position: sticky;
                    top: 0;
                    width: 100%;
                }   

                
                
                section {
                    padding-top: 100px;
                }

                nav {
                    bottom: 0;
                    border-top: 1px solid #ccc;
                    position: fixed;
                    height: 49px;
                    width: 100%;
                }
                
            `}</style>
        </>
    )
}