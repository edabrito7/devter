export default function Button ({children, onClick}) {
    return(
        <>
        <button onClick={onClick}>
            {children}
        </button>

        <style jsx>{`
            
            button {
                align-items: center;
                background: #000;
                border: 0;
                border-radius: 9999px;
                color: #fff;
                cursor: pointer;
                display: flex;
                font-size: 1em;
                font-weight: 800;
                padding: 0.5em 1.5em;
                transition: opacity .2s ease;
                   
            } 

            button > :global(svg) {
                margin-right: 0.5em;
            }  

            button:hover {
                    opacity: 0.7;
                }
 
        `}</style>
        </>
    )
}