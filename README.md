
## Link to my api: https://developer.marvel.com/documentation/getting_started

## Links to my website: steadfast-trucks.surge.sh

# Marvelous

## Website Description:
This is a website called Marvelous based on the comics Marvels. The website is a search engine for marvel characters.
You can see their descriptions such as their origin stories and abilities.


## Main technology

HTML
CSS
Javascript
React

## Major problems

Rendering components within a components, When a user clicks on a character the description should up.
(Linking Multiple Components)


## MVP
- Rendering components within a components
- Visually Professional and appealing
- Have descriptions, images, and many more attribute about the characters
- Search input, Users can search characters.

## Post MVP

- Add comic series.
- Incorporate videos about the characters


#### MVP EXAMPLE
- Find and use external api
- Render data on page
- Allow user to choose favorites
- Save their choices in firebase

#### PostMVP EXAMPLE

- Allow players to add their own character.
- More interactive.
- Have




## Code Snippet


```
#root > div {
  min-height: 100vh;
}

Footer sticks to the background
--------------------------------


this.selectPage = this.selectPage.bind(this);
this.nextPage = this.nextPage.bind(this);
this.prevPage = this.prevPage.bind(this);
this.resetCharacter = this.resetCharacter.bind(this);
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}


componentDidMount() {
this.getData(this.pageNumber);
}

async getData(page) {
const data = await fetchData(page * 100);
  this.setState({
    characters: data
})
}


nextPage(nextPage) {
this.getData(nextPage);
this.setState({
  pageNumber: nextPage
})
}

prevPage(e) {
const prevPage = this.state.pageNumber - 1;
this.getData(prevPage);
this.setState({
pageNumber: prevPage
})
}

selectPage(page) {
this.getData(page);
this.setState({
  pageNumber: page
})
}


API HELPER --

async function fetchData(currentPage) {
  const data = await axios(`${Url}characters?ts=1&apikey=${apiKey}&hash=${hash}&limit=100&offset=${currentPage}`);
  console.log(data.data.data.results);
  return data.data.data.results;
}




Basically the first block of code makes the footer sticks to the bottom. With a display using flex and stating certain values.

The next block of codes is a method that passes to components each time a page is clicked. The default limit for characters to render is 20. I had to set the max limit of 100 to display a list of 100 characters in my api helper. Than passed the function into components did mount. So each time a page is clicked it is times by 100 to fetch the next 100 list of characters.  

```
