def count_occurence(text, char):
    char_count = text.lower().count(char.lower())
    print(f'The letter {char} is {char_count} times in the text')

user_text = input('Write a text : ')
user_char = input('Chose a letter : ')

count_occurence(user_text,user_char)
    