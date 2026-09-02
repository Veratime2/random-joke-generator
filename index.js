const fetch = require('node-fetch');

// Fetch a random joke from JokeAPI
async function getRandomJoke() {
  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();

    if (data.error) {
      console.log('Error fetching joke:', data.message);
      return;
    }

    // Handle two-part jokes (setup + delivery)
    if (data.type === 'twopart') {
      console.log('\n🎭 JOKE:');
      console.log(`Setup: ${data.setup}`);
      console.log(`Delivery: ${data.delivery}\n`);
    } else {
      // Handle single-part jokes
      console.log('\n😂 JOKE:');
      console.log(`${data.joke}\n`);
    }
  } catch (error) {
    console.error('Failed to fetch joke:', error.message);
  }
}

// Main execution
console.log('🤣 Welcome to the Random Joke Generator!');
getRandomJoke();
