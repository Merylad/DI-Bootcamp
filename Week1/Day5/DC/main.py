# Challenge 1 : Sorting


def sort_text () :
    user_text = input ('Write words and separate them with a comma : ')
    user_text_sorted = ','.join(sorted(user_text.split(',')))
    return user_text_sorted

# print(sort_text())

# Challenge 2 : Longest Word

def longest_word(sentence):
    words_list = sentence.split(' ')
    longest_lentgh = 0
    longest_word=''
    for word in words_list:
        if len(word)>longest_lentgh:
            longest_lentgh = len(word)
            longest_word = word

    return longest_word

print(longest_word("Margaret's toy is a pretty doll."))
print(longest_word("A thing of beauty is a joy forever."))
print(longest_word("Forgetfulness is by all means powerless!"))
