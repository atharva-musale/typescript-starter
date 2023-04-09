// API details from which to get the jokes
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eb0d92aed3msh7bd753e85e46703p1f59d4jsnc37ecb459ee7',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

const JOKE_URL = 'https://dad-jokes.p.rapidapi.com/random/joke';

// Get elements from DOM
const button = document.getElementById('getJokes');
const output: HTMLElement = document.getElementById('output')!;

if (button) {
	button.addEventListener('click', displayJokes);
}

async function displayJokes() {
	const jokesData = await getDataFromJokesApi();
	const jokeHTML = createJokeElement(jokesData.body[0].setup, jokesData.body[0].punchline);
	output.innerHTML = jokeHTML;
};

async function getDataFromJokesApi() {
	const response = await fetch(JOKE_URL, options);
	return await response.json();
}

function createJokeElement(setup?: any, punchline?: any) {
	if (setup && punchline) {
		return `<p>${setup}</p><p>${punchline}</p>`;
	} else if (punchline) {
		return `<p>${punchline}</p>`;
	} else {
		return `<p>${setup}</p>`;
	}
}