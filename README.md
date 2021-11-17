# Bergflix Frontend

[![Build](https://github.com/Bergflix-Remake/frontend/actions/workflows/build.yml/badge.svg)](https://github.com/Bergflix-Remake/frontend/actions/workflows/build.yml)

## Bergflix is back!

⌛ After being discontinued on the 28th July 2021, Bergflix is back with a new website and a new API. We are currently just two people instead of the 8 that worked on the original project, but oh well. \
We decided to start completely from scratch, with a brand new techstack and design.

## Live and Developement version

🌱 The project is currently in a very early stage in developement, so there is no hosted version yet. You can still download the latest build artifacts from the [Actions page](https://github.com/Bergflix-Remake/frontend/actions).

## Developement

👥 Clone the repository:

```bash
git clone https://github.com/Bergflix-Remake/frontend.git
```

🔽 Download and install the dependencies

```bash
npm install
```

💹 Start local `json-server` and developement server

```bash
json-server -p 3001 --watch db.json & # To see json server output, do "fg"
npm run dev
```

*When starting the server, or reloading the page without cache, it will take a while to load. This is normal and expected. Loading times will be faster on the live production version.*

🔨 Build the project before submitting a PR

```bash
npm run build
# npm run serve to see the live version.
```

## Contributing

🔧 Check [CONTRIBUTING.md](/CONTRIBUTING.md) for more information.
