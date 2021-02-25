export default function Button({ children, onClick, disabled }) {
  return (
    <>
      <button 
      onClick={onClick}
      disabled={disabled}
      >
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
          transition: opacity 0.2s ease;
          user-select: none;
        }

        button[disabled] {
          opacity: 0.2;
          pointer-events: none;
        }

        button > :global(svg) {
          margin-right: 0.5em;
        }

        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}
