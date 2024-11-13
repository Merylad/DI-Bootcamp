from anagram_checker import AnagramChecker

def menu ():
    while True :
        user_choice = input ('Type "word" for the anagram checker or "q" to quit : ')

        if user_choice == 'word':
            while True :
                user_word = input ('Type a word : ').lower()
                if len(user_word.split(' ')) >1:
                    print('You have to type a single word')
                elif user_word.isalpha() == False:
                    print('You have to type only letters')
                else :
                    user_word.replace(' ', '')
                    
                    return user_word
        
        if user_choice == 'q':
            break
    
def anagram_checker ():
    word = menu()
    anagram = AnagramChecker()
    if anagram.is_valid_word(word):
        anagram_list = anagram.get_anagrams(word)
        
        if len(anagram_list) == 0 :
             print(f'''
            Your word : {word}
            This is a valid English word.
            There is no anagram for your word.''')
        else:
            print(f'''
            Your word : {word}
            This is a valid English word.
            Anagrams for your word : {', '.join(anagram_list)}''')


anagram_checker()

#OUTPUT
# Type "word" for the anagram checker or "q" to quit : word
# Type a word : listen

#             Your word : listen
#             This is a valid English word.
#             Anagrams for your word : elints, enlist, inlets, intels, silent, tinsel


# Type "word" for the anagram checker or "q" to quit : word
# Type a word : one two
# You have to type a single word
# Type a word : bla123
# You have to type only letters

# Type a word : hello

#             Your word : hello
#             This is a valid English word.
#             There is no anagram for your word.
