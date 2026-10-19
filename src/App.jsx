export default function App() {
  return (
    <div className="ts-page">
      <main className="ts-main">
        <svg className="ts-drop" viewBox="0 0 100 130" role="img" aria-label="Oil drop">
          <defs>
            <radialGradient id="oil" cx="35%" cy="35%" r="75%">
              <stop offset="0%" stopColor="#fbe39a" />
              <stop offset="55%" stopColor="#e9b949" />
              <stop offset="100%" stopColor="#b4801f" />
            </radialGradient>
          </defs>
          <path d="M50 4 C50 4 8 58 8 84 a42 42 0 0 0 84 0 C92 58 50 4 50 4 Z" fill="url(#oil)" />
          <ellipse cx="34" cy="86" rx="7" ry="14" fill="#fff" opacity=".35" transform="rotate(18 34 86)" />
        </svg>

        <h1 className="ts-name">tanidift</h1>
        <p className="ts-tag">Organic oils, coming soon.</p>
        <p className="ts-note">
          We are preparing our first collection of pure, organic oils.
        </p>
      </main>

      <footer className="ts-foot">
        ©2026 Tanidift. Founded by Mohamed Kabous.
      </footer>
    </div>
  )
}

