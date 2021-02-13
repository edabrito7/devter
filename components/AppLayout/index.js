import styles, {globalStyles} from './styles'

export default function Applayout ({children}) {
    
    return(
        <>
        <div>
            <main>
                {children}
            </main>
        </div>
        <style jsx>{styles}</style>
        <style jsx>{globalStyles}</style>
        </>
    )
}