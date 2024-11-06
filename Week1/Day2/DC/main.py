#CHALLENGE 1#

user_number = int(input('Number : '))
user_lenght = int(input('Lenght : '))
user_list=[]

for num in range(1, user_lenght+1):
    user_list.append(num * user_number)

print(user_list)

#CHALLENGE 2#

# user_word = input('Type a word : ').lower()  
# new_user_word = ''
# previous_letter=''

# for letter in user_word:
#     if letter is not previous_letter:
#         new_user_word += letter 
#         previous_letter = letter 


# print(new_user_word)