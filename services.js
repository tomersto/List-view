const baseUrl = "https://restcountries.eu/rest/v2/"
async function getAllCountries() {
    try {
        const countries = await $.ajax({
            url: `${baseUrl}all`,
            method: "GET"
        })

        return countries.map(country => {
            return { ...country, id: Math.round(Math.random() * 999999999999), likes: 0, isFavorite: false }
        })
    }
    catch (err) {
        alert(err.message)
        return []
    }
}


