# Goood Mood Check-in

Interactive prototype of the Goood app: iPhone home-screen launch, splash,
mood check-in with the reacting seedling, homepage, library, sounds, seasons,
stories and the rain scene. Served with a small Node.js + Express server.

## Project structure
```
goood-mood-checkin/
├── public/
│   └── index.html   # the full prototype (images, animation, sound all inlined)
├── server.js        # Express server
├── package.json
├── .gitignore
└── README.md
```

## Run locally
Requires Node.js 18 or newer.
```bash
npm install
npm start
```
Open http://localhost:3000

## Upload to GitHub
```bash
git init
git add .
git commit -m "Goood mood check-in prototype"
git branch -M main
git remote add origin https://github.com/<your-username>/goood-mood-checkin.git
git push -u origin main
```
Or on github.com: create a new repository → "uploading an existing file" →
drag in everything inside this folder (including the `public` folder) → Commit.

## Deploy on Vercel
1. Vercel dashboard → Add New → Project → import the GitHub repo.
2. Framework preset: **Express** (Vercel usually detects it automatically).
3. Leave build and output settings empty → Deploy.

Every push to `main` redeploys automatically.

## Notes
- `public/index.html` is about 4 MB because the images are embedded in it.
- The only outside requests are Google Fonts.
- Sound starts after the first tap, as browsers require.
- `GET /api/health` returns a JSON status.
