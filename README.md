# Random Joke Generator 🤣

A simple and fun Node.js application that generates random jokes using the [JokeAPI](https://jokeapi.dev/).

## Features

- ✨ Fetch random jokes from multiple categories
- 🎭 Support for two-part jokes (setup + delivery) and single-part jokes
- 🚀 Express server with REST API endpoints
- 🌐 Easy-to-use command-line interface

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Veratime2/random-joke-generator.git
   cd random-joke-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Command Line

Run the simple joke generator:
```bash
npm start
```

### Web Server

Start the Express server:
```bash
npm run dev
```

Then make API requests:

- **Get a random joke:**
  ```
  GET http://localhost:3000/api/joke
  ```

- **Get a joke from a specific category:**
  ```
  GET http://localhost:3000/api/joke/programming
  GET http://localhost:3000/api/joke/general
  GET http://localhost:3000/api/joke/knock-knock
  ```

## API Response Example

**Two-part joke:**
```json
{
  "type": "twopart",
  "setup": "Why do programmers prefer dark mode?",
  "delivery": "Because light attracts bugs!",
  "category": "Programming",
  "flags": { "nsfw": false, "religious": false, "political": false, "racist": false, "sexist": false, "explicit": false },
  "safe": true,
  "id": 123,
  "error": false
}
```

**Single-part joke:**
```json
{
  "type": "single",
  "joke": "Why don't scientists trust atoms? Because they make up everything!",
  "category": "General",
  "flags": { "nsfw": false, "religious": false, "political": false, "racist": false, "sexist": false, "explicit": false },
  "safe": true,
  "id": 456,
  "error": false
}
```

## Technologies

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **node-fetch** - HTTP client
- **JokeAPI** - External joke data source

## Categories

- `general` - General jokes
- `programming` - Programming-related jokes
- `knock-knock` - Knock-knock jokes
- `Any` - Random from all categories

## License

MIT
