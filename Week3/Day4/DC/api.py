import requests
import random
import json
import pg8000

# response = requests.get("https://restcountries.com/v3.1/all")
# countries = response.json()


# random_countries = random.sample(countries, 10)


# selected_countries = []
# for country in random_countries:
#     selected_countries.append({
#         "name": country["name"]["common"],
#         "capital": country['capital'][0], 
#         "flag": country["flags"]["svg"],  
#         "subregion": country['subregion'],  
#         "population": country["population"]
#     })


# with open("random_countries.json", "w") as file:
#     json.dump(selected_countries, file, indent=4)


###INSERT INTO THE DB

response = requests.get("https://restcountries.com/v3.1/all")
countries = response.json()


random_countries = random.sample(countries, 10)

connection = pg8000.connect(database = 'bootcamp',
                              user = 'postgres',
                              password = 'naomie',
                              host='localhost',
                              port='5432')

cursor = connection.cursor()

create_table_query = f'''CREATE TABLE random_countries (
                        id SERIAL PRIMARY KEY,
                        name VARCHAR(100) NOT NULL,
                        capital VARCHAR(100) NOT NULL,
                        flag_code VARCHAR(100),
                        population INTEGER)'''

cursor.execute(create_table_query)
connection.commit()







def insert_into_query(data):
    query = f''' INSERT INTO random_countries (name, capital, flag_code, population)
                VALUES ('{data["name"]["common"]}',
                        '{data['capital'][0]}',
                        '{data["flags"]["svg"]}',
                         {data['population']})
            '''
    
    cursor.execute(query)
    connection.commit()
    
for country in random_countries:
    insert_into_query(country)




connection.close()