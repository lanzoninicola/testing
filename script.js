const googleDatabase = [
    'foodgoog.com',
    'donkeyfood.com',
    'animals.com',
    'catsanddoog.com',
    'catsanimals.com',
    'dogsanimals.com',
    'iloveanimals.com'
]


const searchEngine = (word) => {
    const result = googleDatabase.filter(site => site.includes(word));

    return (result.length > 3) ? result.slice(0, 3) : result
}

const wordToSearch = 'animal'

console.log(searchEngine(wordToSearch))


