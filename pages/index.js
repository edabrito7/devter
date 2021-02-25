import { useState, useEffect } from "react";

import Applayout from "components/AppLayout/index";
import Button from "components/Button";
import GitHubIcon from "components/Icons/Github";
import Avatar from 'components/Avatar/index';

import { colors } from "styles/themes";

import { loginWithGitHub, onAuthStateChanged } from "firebase/client";

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handleSignIn = () => {
    loginWithGitHub()
      .then(setUser)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Applayout>
        <section>
          <img src="./devter.png" alt="Logo" />
          <h1>Devter</h1>
          <h2>
            Talk about development
            <br />
            with developers 👩‍ 👨‍
          </h2>
          <div>
            {user === null && (
              <Button onClick={handleSignIn}>
                <GitHubIcon fill="#fff" width={24} height={24} />
                Login with GitHub
              </Button>
            )}
            {user && user.avatar && (
              <Avatar 
                src={user.avatar} 
                alt={`${user.username} avatar`} 
                text={user.username}
              />
            )}
          </div>
        </section>
      </Applayout>

      <style jsx>{`
        section {
          display: grid;
          height: 100%;
          place-items: center;
          place-content: center;
        }

        img {
          width: 64px;
        }

        h1 {
          color: ${colors.secundary};
          font-size: 1.5em;
          font-weight: 800;
          margin-bottom: 0;
        }
        h2 {
          color: ${colors.primary};
          font-size: 1em;
        }

        div {
          margin-top: 1em;
        }
      `}</style>
    </>
  );
}
