# 🌟 Exercise 1 – Random Sentence Generator
import random

def get_words_from_file (file):
    with open(file, 'r', encoding= 'utf-8') as f:
        content = f.read()
        return content.split('\n')
    
def get_random_sentence (length):
    random_list = []
    list_words = get_words_from_file('words.txt')
    for i in range(length):
        word = random.choice(list_words)
        random_list.append(word)
    
    random_sentence = ' '.join(random_list).lower() + '.'
    return random_sentence

def main():
    print('This program allows you to chose the length of a sentence made by random words.')
    while True :
        try :
            user_length = int(input('Chose a number between 2 and 20 : '))
            if 2 <= user_length <= 20:
                break
            else:
                print('The number must be between 2 and 20.')
        except:
                print('You must enter a number')
        
    
    random_sentence= get_random_sentence(user_length)
    print(random_sentence)
    
# main()
#OUTPUT
# This program allows you to chose the length of a sentence made by random words.
# Chose a number between 2 and 20 : 23
# The number must be between 2 and 20.
# Chose a number between 2 and 20 : k
# You must enter a number
# Chose a number between 2 and 20 : 9
# ureal cabestros sculches eighteenth bitterbrush bestraddling effusively remaindered wines.

# 🌟 Exercise 2: Working with JSON

import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)
salary = data['company']['employee']['payable']['salary']
data['company']['employee']['birth_date'] = None

json_file = "my_file.json"

with open(json_file, 'w') as file_obj:
    json.dump(data, file_obj, indent = 2)