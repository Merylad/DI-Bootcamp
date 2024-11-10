import random

# wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
wordslist = ['correction']
random_word = random.choice(wordslist) 

hangman0 = '''
_________
|    
|    
|   
|   
|
____
'''

hangman1 = '''
_________
|    |
|    
|   
|   
|
____
'''

hangman2 = '''
_________
|    |
|    O
|   
|   
|
____
'''

hangman3 = '''
_________
|    |
|    O
|    |
|   
|
____
'''
hangman4 = '''
_________
|    |
|    O
|   /|
|   
|
____
'''

hangman5 = '''
_________
|    |
|    O
|   /|\\
|    
|
____
'''

hangman6 = '''
_________
|    |
|    O
|   /|\\
|   / 
|
____
'''

hangman7 = '''
_________
|    |
|    O
|   /|\\
|   / \\
|
____
'''

def display_hangman(error):
    if error == 0:
        print(hangman0)
    elif error == 1:
        print(hangman1)
    elif error == 2:
        print (hangman2)
    elif error == 3:
        print (hangman3)
    elif error == 4:
        print (hangman4)
    elif error == 5:
        print (hangman5)
    elif error == 6:
        print (hangman6)
    elif error == 7:
        print (hangman7)



def display_word(word, user_word, error, winner, letters_list):
    print('ici',user_word)
    
    

    while True :
        user_letter = input ('Chose a letter : ').lower()
        if user_letter in letters_list :
            print('You already chose that letter!')
        else:
            letters_list.append(user_letter)
            break


    if user_letter in word :
        for index, char in enumerate(word):
            if char == user_letter :
                user_word_list = list(user_word)
                user_word_list[index] = user_letter
                user_word = ''.join(user_word_list)

                if '*' not in user_word :
                    print ('Congrats ! You guessed the word')
                    winner = True

        print(user_word)

    else:
        error += 1
        display_hangman(error)
        print( user_word)

    return (winner, user_word, error )

def display_stars (word) :
    word_to_guess = ''
    for char in list(word):
        if char != ' ':
            word_to_guess += '*'
        elif char == ' ':
            word_to_guess += ' '

    return word_to_guess



def play ():
    error = 0
    winner = False
    letters_list=[]
    star_word = display_stars (random_word)
    print(hangman0)
    while winner == False :

        winner, star_word, error = display_word(random_word, star_word, error, winner, letters_list)

        if error == 7 :
            print (f'You are hanged ! the word to guess was {random_word}')
            break

play()