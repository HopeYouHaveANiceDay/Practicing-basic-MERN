Practicing basic MERN (MongoDB, Express, React, Node.js). Thanks.
 
Reference: 
 
The ULTIMATE MERN Stack Complete Guide (MongoDB, Express, React, Node.js): https://youtu.be/4nKWREmCvsE?si=aPEuNLmwMBYFpcKk 
 

% 
# mkdir mern && cd mern
mern % 
# mkdir server && cd server
server % 
# npm install mongodb express cors
# touch server.js
# node -env-file=config.env server
=> server is the name of the file that we created for our server ‘server.js’
=> and then notice that we’re also using the built-in environment variable functionality of the version of Node.js 

==================================
================================

# Error： MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

唔跟YouTube video：
（1）terminal type：
# npm install dotenv

（2）加咗：
係file ‘server.js’ 最上面，
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

（3）改咗：
係file ‘connection.js’, 
由const uri = process.env.ATLAS_URI || "";
改為const uri = process.env.ATLAS_URL;

（4）刪咗：
係file ‘config.env’, 刪咗  PORT=5050, 就係只有ATLAS_URL ，同埋ATLAS_URL唔加 “”。

# node --env-file=config.env server

=> Pinged your deployment. You successfully connected to MongoDB! [dotenv@17.2.3] injecting env (0) from config.env -- tip: ⚙️ enable debug logging with { debug: true } Server listening on port 5050

嗯，用到run到就可以了。

==================================
================================

# cd mern
# npm create vite@latest client -- --template react
# cd client
# npm install 
# npm install -D tailwindcss postcss autoprefixer
 npx tailwindcss init -p => Error
=> ≈ tailwindcss v4.1.13 Invalid command: init
Options: 
-i, --input ················· Input file 
-o, --output ················ Output file [default: `-`] -w, --watch[=always] ········ Watch for changes and rebuild as needed, and use `always` to keep watching when stdin is closed 

-m, --minify ················ Optimize and minify the output 

--optimize ·············· Optimize the output without minifying 
--cwd ··················· The current working directory [default: `.`] 
--map ··················· Generate a source map [default: `false`] 
-h, --help ·················· Display usage information
在 Tailwind CSS v4.1.13 中已經移除 init 指令，這是新版 Tailwind 的重大變更之一。Tailwind CSS v4 開始，不再使用 tailwindcss init 指令，而是直接手動建立設定檔。
# touch tailwind.config.js postcss.config.js
✅然後在 tailwind.config.js , postcss.config.js中加入基本設定
✅在 src/index.css 中加入 Tailwind 指令
✅ 在 main.jsx 或 main.tsx 中匯入 CSS

==================================
================================

# npm install -D react-router-dom

// useEffect is going to get our records from our backend


==================================
================================
In a file ‘App.jsx’, 
<Outlet /> are the components that we set as children in our main.jsx file. 
so in ‘main.jsx’ file, <App /> is rendered really on every path and that is going to allow us to render .

  {
    path: "/edit/:id", // edit route
    element: <App />,
    children: [
      {
        path: "/edit/:id",
        element: <Record />, // only shows a single record
      },
    ],
  },


=========================
App.jsx
Delete: 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 # return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

========================
In my client terminal,
# npm run dev

# Error: [plugin:vite:css] [postcss] It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.

# npm install -D @tailwindcss/postcss

更新 postcss.config.js
請打開你的 postcss.config.js，並改成以下內容：

import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [tailwindcss(), autoprefixer()],
};

========================

(1) To make the original data appear in the edit form when you click "Edit”???
(2) All data input needs to be required before clicking the Create Employee button ????
遲啲再返黎整

