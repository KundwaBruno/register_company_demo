<p align="center">
  <img src="https://res.cloudinary.com/dxyu6elli/image/upload/v1702996210/Screenshot_2023-12-19_at_16.29.58_afhmld.png" alt="Company Register Demo" />
</p>

# Company Registration Demo

> A sample form demonstrating the company registration process by collecting necessary details.

## Table of Contents

- [Note](#Note)
- [Setup](#setup)
- [Usage](#usage)
- [Scripts](#Scripts)

## NB

> NB: This is test project for an interview.

## Setup

1. Clone the repository.

```bash
git clone https://github.com/KundwaBruno/portfolioV4
```

3. Install dependencies

```
yarn install
```

4. Create a firebase realtime <a href="https://console.firebase.google.com/" target="_blank">database</a> instance and add environment variables as follows to .env file.

```
NEXT_PUBLIC_FIREBASE_APIKEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_DATABASE_URL
```

## Usage

1. Run the development server

```
yarn dev
```

2. Open your browser and navigate to `http://localhost:3000` if port 3000 is in use check out the terminal to know which port that the project is running on.

## Technologies Used

- <a href="https://react.dev/" target="_blank">React Js</a>
- <a href="https://nextjs.org/" target="_blank">NextJs</a>
- <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>
- <a href="https://ant.design/" target="_blank">Firebase</a>

## Scripts

- `yarn dev` : Start development server.
- `yarn build` : Create an optimized production build.
- `yarn start` : Start the production server.
- `lint` : Run ESLint to check for code style issues.
- `yarn type:check` : Check for code typescript issues.
- `husky:fix`: Fix husky git hooks commands.

## Contributors

<a href="https://www.linkedin.com/in/kundwabruno/" target="_blank">Kundwa Bruno Materne </a>
