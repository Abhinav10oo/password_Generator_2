import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSpecial, setUseSpecial] = useState(false);
  const [customWord, setCustomWord] = useState("");
  const [length, setLength] = useState(16);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let pool = "";

    if (useUpper) pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLower) pool += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) pool += "0123456789";
    if (useSpecial) pool += "!@#$%^&*()-+";

    if (!pool) {
      setPassword("");
      return;
    }

    // Randomize case of custom word
    let word = "";
    for (let char of customWord) {
      word += Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
    }

    if (word.length > length) {
      setPassword("");
      return;
    }

    const remaining = length - word.length;

    // Generate random characters
    let randomPart = "";
    for (let i = 0; i < remaining; i++) {
      randomPart += pool[Math.floor(Math.random() * pool.length)];
    }

    // Combine and shuffle
    const combined = word + randomPart;
    const shuffled = combined
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    setPassword(shuffled);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getPasswordStrength = () => {
    if (!password) return "";
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()\-+]/.test(password);
    
    const score = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
    
    if (password.length >= 16 && score >= 3) return "Very strong";
    if (password.length >= 12 && score >= 3) return "Strong";
    if (password.length >= 8 && score >= 2) return "Medium";
    return "Weak";
  };

  return (
    <div className="app-wrapper">
      <div className="hero-section">
        <h1>Random Password Generator</h1>
        <p className="subtitle">
          Instantly create strong and secure passwords to keep your account safe online.
        </p>
      </div>

      <div className="app-container">
        <div className="password-section">
          <div className="password-display">
            <input 
              type="text" 
              value={password} 
              readOnly 
              placeholder="Click generate to create password"
            />
            {password && (
              <span className={`strength-badge ${getPasswordStrength().toLowerCase().replace(' ', '-')}`}>
                {getPasswordStrength()}
              </span>
            )}
            {password && (
              <button className="refresh-btn" onClick={generatePassword} title="Generate new password">
                ↻
              </button>
            )}
          </div>
          
          {password && (
            <button className="copy-btn" onClick={copyToClipboard}>
              {copied ? "Copied!" : "Copy"}
            </button>
          )}
        </div>

        <div className="length-control">
          <label>Password length: <strong>{length}</strong></label>
          <div className="slider-container">
            <button className="slider-btn" onClick={() => setLength(Math.max(4, length - 1))}>−</button>
            <input 
              type="range" 
              min="4" 
              max="32" 
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="slider"
            />
            <button className="slider-btn" onClick={() => setLength(Math.min(32, length + 1))}>+</button>
          </div>
        </div>

        <div className="characters-section">
          <label className="section-label">Characters used:</label>
          <div className="checkbox-group">
            <label className={`checkbox-card ${useUpper ? 'active' : ''}`}>
              <input 
                type="checkbox" 
                checked={useUpper}
                onChange={(e) => setUseUpper(e.target.checked)}
              />
              <span className="checkbox-label">ABC</span>
            </label>

            <label className={`checkbox-card ${useLower ? 'active' : ''}`}>
              <input 
                type="checkbox" 
                checked={useLower}
                onChange={(e) => setUseLower(e.target.checked)}
              />
              <span className="checkbox-label">abc</span>
            </label>

            <label className={`checkbox-card ${useNumbers ? 'active' : ''}`}>
              <input 
                type="checkbox" 
                checked={useNumbers}
                onChange={(e) => setUseNumbers(e.target.checked)}
              />
              <span className="checkbox-label">123</span>
            </label>

            <label className={`checkbox-card ${useSpecial ? 'active' : ''}`}>
              <input 
                type="checkbox" 
                checked={useSpecial}
                onChange={(e) => setUseSpecial(e.target.checked)}
              />
              <span className="checkbox-label">#$&</span>
            </label>
          </div>
        </div>

        <div className="custom-word-section">
          <input 
            type="text" 
            placeholder="Custom word (optional)" 
            value={customWord}
            onChange={(e) => setCustomWord(e.target.value)}
            className="custom-word-input"
          />
        </div>

        <button className="generate-btn" onClick={generatePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;