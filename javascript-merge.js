<div class="js-merge-container">
  <h2><span class="js-merge-title-highlight">JS</span> Merge</h2>

  <div class="js-merge-form-group">
    <label>Encrypted String</label>
    <input type="text" class="js-merge-input" id="encryptedInput" placeholder="Masukkan encrypted string">
  </div>

  <div class="js-merge-form-group">
    <label>Secret Key</label>
    <div class="js-merge-password-container">
      <input type="password" class="js-merge-input" id="js-merge-secret-key" placeholder="Masukkan secret key">
      <button type="button" class="js-merge-show-password" onclick="togglePassword()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
      </button>
    </div>
  </div>

  <div class="js-merge-form-group">
    <label>Additional Javascript</label>
    <div class="js-merge-input-code-wrapper">
      <textarea id="js-merge-syntax-highlighter" placeholder="Masukkan javascript (opsional)"></textarea>
    </div>
  </div>

  <div class="js-merge-button-wrapper">
    <button class="js-merge-generate-btn" type="button" onclick="processCode()">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24" style="margin-right:8px;">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13-.56-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.3-.06.62-.06.94s.02.64.06.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c-.24 0 .43-.17 .47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22 .08 .47 0 .59-.22l1.92-3.32c.12-.22 .07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
      </svg>
      Generate
    </button>
    <button class="js-merge-reset-btn" type="button" onclick="resetForm()" title="Reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24" style="margin-right:8px;">
        <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
      </svg>
      Reset
    </button>
  </div>

  <div class="js-merge-form-group js-merge-output-group">
    <label>Output</label>
    <div class="js-merge-output-container">
      <textarea id="js-merge-output-code" class="js-merge-output-code" readonly placeholder="Hasil akan muncul di sini."></textarea>
      <button class="js-merge-copy-btn" type="button" title="Copy" onclick="copyOutput()">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/>
        </svg>
        <span>Copy</span>
      </button>
    </div>
  </div>
</div>

<style>
  /* To change Header Subtitle */ 
  .headH::after { content: 'JS Merge'; }

  /* Variabel Root */
  :root {
    --bg-light: #ffffff;
    --bg-dark: #1e1e1e;
    --text-light: #000000;
    --text-dark: #ffffff;
    --card-shadow: rgba(0, 0, 0, 0.1);
    --border-dark: #444;
    --copy-bg-light: rgba(40,167,69,0.745);
    --copy-bg-dark: rgba(72,225,107,0.702);
    --js-yellow: #F7DF1E;
    --js-yellow-dark: #E6C700;
    --button-bg-dark: #4285f4;
    --error-color: rgba(255, 0, 0, 0.8);
    --error-border: #ff0000;
    --input-border: #ddd;
    --placeholder-color: #888;
  }

  /* Mode Gelap */
  :root.lzD.drK, 
  :root:not(.lzD) .modI:checked ~ .mainW {
    --bg-light: #1e1e1e;
    --text-light: #ffffff;
    --card-shadow: rgba(255, 255, 255, 0.05);
    --input-border: #444;
    --placeholder-color: #aaa;
  }

  /* JS Merge Container */
  .js-merge-container {
    position: relative;
    max-width: 800px;
    background: var(--bg-light);
    padding: 20px;
    margin: 0 auto;
    border-radius: 12px;
    box-shadow: 0 8px 20px var(--card-shadow);
    font-family: 'Segoe UI', Arial, sans-serif;
    color: var(--text-light);
    animation: modernFadeIn 0.6s ease-out;
  }
  :root.lzD.drK .js-merge-container, 
  :root:not(.lzD) .modI:checked ~ .mainW .js-merge-container {
    border: 1px solid var(--border-dark);
  }

  /* JS Merge Title */
  .js-merge-container h2 {
    text-align: center;
    margin: 15px 0 35px;
    font-size: 24px;
    font-weight: bold;
    color: var(--text-light);
    animation: modernFadeIn 0.6s ease-out 0.1s both;
  }
  .js-merge-title-highlight {
    background: var(--js-yellow);
    padding: 2px 6px;
    border-radius: 4px;
  }
  :root.lzD.drK .js-merge-title-highlight,
  :root:not(.lzD) .modI:checked ~ .mainW .js-merge-title-highlight {
    background: var(--js-yellow-dark);
  }

  /* Animasi Masuk */
  @keyframes modernFadeIn {
    0% {
      opacity: 0;
      transform: translateY(15px) scale(0.98);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  /* JS Merge Form Group */
  .js-merge-form-group {
    margin-bottom: 20px;
    animation: modernFadeIn 0.6s ease-out 0.2s both;
  }
  .js-merge-form-group:nth-child(2) {
    margin-top: 25px;
  }
  .js-merge-form-group label {
    font-size: 18px;
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
  }

  /* JS Merge Input */
  .js-merge-input {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--input-border);
    border-radius: 8px;
    font-size: 14px;
    font-family: 'Segoe UI', Arial, sans-serif;
    transition: border-color 0.3s;
    box-sizing: border-box;
    animation: modernFadeIn 0.6s ease-out 0.3s both;
  }
  .js-merge-input:focus {
    outline: none;
    border-color: #1a73e8;
    border-width: 1px;
  }
  .js-merge-input.error {
    border-color: var(--error-border);
  }
  :root.lzD.drK .js-merge-input:focus,
  :root:not(.lzD) .modI:checked ~ .mainW .js-merge-input:focus {
    border-color: #4285f4;
  }
  :root.lzD.drK .js-merge-input,
  :root:not(.lzD) .modI:checked ~ .mainW .js-merge-input {
    border: 1px solid var(--border-dark);
    background: var(--bg-dark);
    color: var(--text-dark);
  }
  .js-merge-password-container {
    position: relative;
  }
  .js-merge-show-password {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
  }
  .js-merge-show-password svg {
    width: 20px;
    height: 20px;
    fill: #555;
  }
  :root.lzD.drK .js-merge-show-password svg,
  :root:not(.lzD) .modI:checked ~ .mainW .js-merge-show-password svg {
    fill: #b0b0b0;
  }
  #js-merge-secret-key {
    padding-right: 40px;
  }

  /* Textarea Styling untuk Additional Javascript */
  .js-merge-input-code-wrapper {
    position: relative;
    animation: modernFadeIn 0.6s ease-out 0.4s both;
  }
  #js-merge-syntax-highlighter {
    position: relative;
    width: 100%;
    height: 250px;
    border: 1px solid var(--input-border);
    border-radius: 8px;
    font-family: 'Code Source Pro', monospace;
    font-size: 14px;
    line-height: 1.5;
    overflow: auto;
    z-index: 1;
    background: var(--bg-light);
    color: var(--text-light);
    padding: 10px;
    box-sizing: border-box;
    resize: none;
    white-space: pre;
    word-break: normal;
  }
  #js-merge-syntax-highlighter:focus {
    outline: none;
    border-color: #1a73e8;
    border-width: 1px;
  }
  #js-merge-syntax-highlighter::placeholder {
    color: var(--placeholder-color);
    font-size: 14px;
    opacity: 0.6;
  }
  :root.lzD.drK #js-merge-syntax-highlighter,
  :root:not(.lzD) .modI:checked ~ .mainW #js-merge-syntax-highlighter {
    border: 1px solid var(--border-dark);
    background: var(--bg-dark);
    color: var(--text-dark);
  }
  :root.lzD.drK #js-merge-syntax-highlighter::placeholder,
  :root:not(.lzD) .modI:checked ~ .mainW #js-merge-syntax-highlighter::placeholder {
    color: #aaa;
  }

  /* Output Textarea Styling */
  .js-merge-output-container {
    position: relative;
    animation: modernFadeIn 0.6s ease-out 0.5s both;
  }
  .js-merge-output-code {
    width: 100%;
    height: 250px;
    border: 1px solid var(--input-border);
    border-radius: 8px;
    font-family: 'Code Source Pro', monospace;
    font-size: 14px;
    line-height: 1.5;
    overflow: auto;
    resize: none;
    background: var(--bg-light);
    color: var(--text-light);
    padding: 10px;
    box-sizing: border-box;
    white-space: pre;
    word-break: normal;
  }
  .js-merge-output-code:read-only {
    background: var(--bg-light);
  }
  .js-merge-output-code:focus {
    outline: none;
    border-color: #1a73e8;
    border-width: 1px;
  }
  .js-merge-output-code::placeholder {
    color: var(--placeholder-color);
    font-size: 14px;
    opacity: 0.6;
  }
  :root.lzD.drK .js-merge-output-code,
  :root:not(.lzD) .modI:checked ~ .mainW .js-merge-output-code {
    border: 1px solid var(--border-dark);
    background: var(--bg-dark);
    color: var(--text-dark);
  }
  :root.lzD.drK .js-merge-output-code::placeholder,
  :root:not(.lzD) .modI:checked ~ .mainW .js-merge-output-code::placeholder {
    color: #aaa;
  }

  /* Output Error */
  .js-merge-output-error {
    color: var(--error-color);
    font-size: 14px;
    line-height: 1.5;
    padding: 10px;
    background: var(--bg-light);
    border-radius: 8px;
  }
  :root.lzD.drK .js-merge-output-error,
  :root:not(.lzD) .modI:checked ~ .mainW .js-merge-output-error {
    background: var(--bg-dark);
    color: var(--error-color);
  }

  /* Copy Button */
  .js-merge-copy-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: var(--copy-bg-light);
    border: none;
    padding: 8px 10px;
    border-radius: 5px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .js-merge-copy-btn:hover {
    background: #218838;
  }
  .js-merge-copy-btn svg {
    width: 14px;
    height: 14px;
    fill: #fff;
  }
  .js-merge-output-container:hover .js-merge-copy-btn,
  .js-merge-output-container:focus-within .js-merge-copy-btn {
    opacity: 1;
  }
  :root.lzD.drK .js-merge-copy-btn,
  :root:not(.lzD) .modI:checked ~ .mainW .js-merge-copy-btn {
    background: var(--copy-bg-dark);
  }

  /* Button */
  .js-merge-button-wrapper {
    display: flex;
    justify-content: center;
    margin: 30px 0 20px;
    position: relative;
    animation: modernFadeIn 0.6s ease-out 0.3s both;
    gap: 10px;
  }
  .js-merge-generate-btn {
    padding: 8px 35px;
    background: #007bff;
    color: #fff;
    border: none;
    font-size: 17px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: transform 0.2s ease, background 0.3s;
  }
  .js-merge-reset-btn {
    padding: 10px 35px;
    background: #007bff;
    color: #fff;
    border: none;
    font-size: 17px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: transform 0.2s ease, background 0.3s;
  }
  .js-merge-generate-btn:hover,
  .js-merge-reset-btn:hover {
    background: #0056b3;
    transform: scale(1.05);
  }
  :root.lzD.drK .js-merge-generate-btn,
  :root.lzD.drK .js-merge-reset-btn,
  :root:not(.lzD) .modI:checked ~ .mainW .js-merge-generate-btn,
  :root:not(.lzD) .modI:checked ~ .mainW .js-merge-reset-btn {
    background: var(--button-bg-dark);
  }
  :root.lzD.drK .js-merge-generate-btn:hover,
  :root.lzD.drK .js-merge-reset-btn:hover,
  :root:not(.lzD) .modI:checked ~ .mainW .js-merge-generate-btn:hover,
  :root:not(.lzD) .modI:checked ~ .mainW .js-merge-reset-btn:hover {
    background: #3267d6;
  }

  /* Responsif */
  @media (max-width: 600px) {
    .js-merge-container {
      padding: 18px;
    }
    .js-merge-container h2 {
      font-size: 20px;
    }
    .js-merge-form-group label {
      font-size: 15px;
      margin-bottom: 10px;
    }
    #js-merge-syntax-highlighter,
    .js-merge-output-code {
      height: 200px;
      font-size: 12px !important;
    }
    #js-merge-syntax-highlighter::placeholder {
      font-size: 13px !important;
    }
    .js-merge-output-code::placeholder {
      font-size: 13px !important;
    }
    .js-merge-output-error {
      font-size: 13px !important;
    }
    .js-merge-generate-btn {
      padding: 10px 10px;
      font-size: 14px;
    }
    .js-merge-reset-btn {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
</style>

<!-- CryptoJS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
<script>
const encryptedCode = "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";
const secretKey = "5A8Zvhuu7kSXfi2kn3RZ2SrXgkc6HPW8";
try {
    const bytes = CryptoJS.AES.decrypt(encryptedCode, secretKey);
    const decryptedCode = bytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedCode) {
        console.error("Dekripsi gagal: Kunci salah atau kode rusak.");
        throw new Error("Dekripsi gagal");
    }
    console.log('Full decrypted code:', decryptedCode);
    try {
        eval(decryptedCode);
        console.info("Script decrypted by @gunturor");
    } catch (execError) {
        console.error("Error saat mengeksekusi kode:", execError);
        throw execError;
    }
} catch (error) {
    console.error("Error selama proses dekripsi atau eksekusi:", error.message);
}
</script>
