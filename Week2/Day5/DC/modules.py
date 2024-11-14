import requests
import time

def load_time(url):
    start_time = time.time()  
    response = requests.get(url)  
    end_time = time.time() 

    load_duration = end_time - start_time  

    return load_duration

print(load_time('https://www.google.com'))
print(load_time('https://www.ynet.co.il'))
print(load_time('https://www.imdb.com'))