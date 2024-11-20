import requests
import random
import json

response = requests.get("https://restcountries.com/v3.1/all")
countries = response.json()


random_countries = random.sample(countries, 10)


selected_countries = []
for country in random_countries:
    selected_countries.append({
        "name": country["name"]["common"],
        "capital": country['capital'][0], 
        "flag": country["flags"]["svg"],  
        "subregion": country['subregion'],  
        "population": country["population"]
    })


with open("random_countries.json", "w") as file:
    json.dump(selected_countries, file, indent=4)



