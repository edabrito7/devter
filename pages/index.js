import Applayout from '../components/AppLayout/index';
import Button from '../components/Button';
import GitHubIcon from '../components/Icons/Github';
import { colors } from '../styles/themes';


export default function Home() {
  return (
    <>
      <Applayout>
        <section>
          <img src='./devter.png' alt='Logo'/>
          <h1>Devter</h1>
          <h2>Talk about development<br />with developers 👩‍ 👨‍</h2>
          <div>
            <Button>
              <GitHubIcon fill='#fff' width='24px' height='24px'/>
              Login with Github
            </Button>
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
          width: 64px
        }

        h1{
          color: ${colors.secundary};
          font-size: 1.5em;
          font-weight: 800;
          margin-bottom: 0;
        }
        h2{
          color: ${colors.primary};
          font-size: 1em;
        }

        div {
          margin-top: 1em;
        }
        
        `}</style>
    </>

    
  )
}
