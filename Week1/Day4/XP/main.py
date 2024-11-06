#Exercise 1 : What are you learning ?

def display_message() :
    print ('I am learning Python')

# display_message()

#🌟 Exercise 2: What’s your favorite book ?

def favorite_book(title):
    print(f'One of my favorite books is {title}.')

# favorite_book('Harry Potter')

# 🌟 Exercise 3 : Some Geography

def describe_city(city, country = 'USA'):
    print(f'{city} is in {country}')

# describe_city('Paris', 'France')
# describe_city('New-York')

#Exercise 4 : Random
import random
def compare_numbers(num):
    if num <1 or num >100 :
        print('The number is not between 1 and 100')
    else :
        rand_num = random.randint(1, 100)
        if num == rand_num :
            print(f'WOW {rand_num} and {num} are the same !')
        else:
            print (f'Try again : My number was {rand_num} and yours {num}')

# compare_numbers(26)

# 🌟 Exercise 5 : Let’s create some personalized shirts !
# def make_shirt(size, text):
#     print(f'The size of the shirt is {size} and the text is "{text}".')

# make_shirt('M', 'I rock')

# def make_shirt(size = 'L', text = 'I love Python'):
#     print(f'The size of the shirt is {size} and the text is "{text}".')

# make_shirt()
# make_shirt('M')
# make_shirt('M', 'I rock')

def make_shirt(**kwargs):
    print(f'The size of the shirt is {kwargs['size']} and the text is "{kwargs['text']}".')


my_dict = {
    'size' : 'L', 
    'text': 'I rock'
}

# make_shirt(**my_dict)

#🌟 Exercise 6 : Magicians …
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
    for item in magicians :
        print (item)

# show_magicians(magician_names)

def make_great(magicians):
    for i, item in enumerate(magicians) :
        magicians[i] = item +' the Great'
    

# make_great(magician_names)
# show_magicians(magician_names)

#🌟 Exercise 7 : Temperature Advice
# def get_random_temp():
#     random_temp = random.randint(-10, 40)
#     return random_temp

def get_random_temp(season):
    if season == 'spring' :
        random_temp = random.randint(10, 25)
    elif season == 'summer' :
        random_temp = random.randint(25, 40)
    elif season == 'fall' :
        random_temp = random.randint(5, 20)
    elif season == 'winter' :
        random_temp = random.randint(-10, 5)


    return random_temp

# print(get_random_temp())

# def main():
#     temp = get_random_temp()
#     print(f'The temperature right now is {temp} degrees Celsius')

# main()

def main(season):
    temp = get_random_temp(season)
    text = ''

    if temp <0 :
        text = 'Brrr, thats freezing! Wear some extra layers today.'
    elif 0<= temp <16 :
        text = 'Quite chilly! Dont forget your coat.'
    elif 16 <= temp <23 :
        text = 'It is getting sunnier!'
    elif 23 <= temp <32 :
        text = 'This is the best temperature!'
    else:
        text = 'It is too hot get your swimsuit and go to the beach!'
    print(f'The temperature right now is {temp} degrees Celsius. {text}')

# user_season = input('Chose a season : spring summer fall or winter : ')
# main(user_season)

#🌟 Exercise 8 : Star Wars Quiz

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def ask_user(questions_list):
    results={
        'win': 0,
        'lost' : 0
    }

    wrong_answers=[]

    for item in questions_list :    
        answer = input(f'{item['question']} ')
        

        if answer.lower() == item['answer'].lower():
            results['win']+=1
        else :
            results['lost']+=1
            wrong_answers.append({
                'question' : item['question'],
                'your answer' : answer,
                'correct answer' : item['answer']
            })

    return (results, wrong_answers)



def results(r):
    print(f'You won {r['win']} times and you lost {r['lost']} times')

def display_wrong_answers(wrong_answers):

    for item in wrong_answers:
        print(f'''
        At the question : {item['question']} you answered {item['your answer']} . The correct answer was : {item['correct answer']}''')

    if len(wrong_answers) >= 3 :
        replay = input('You have more than 3 answers wrong. Would you like to replay (yes/no) ? ')
        if replay == 'no':
            return ('no')


while True :

    user_results, user_wrong_answers = ask_user(data)
    results(user_results)
    want_replay = display_wrong_answers(user_wrong_answers)
    if want_replay == 'no':
        break