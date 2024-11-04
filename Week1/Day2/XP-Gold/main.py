####EX1

# list1 = [1,2,3]
# list2 = [4,5,6]
# list1.extend(list2)
# print(list1)

####EX2
# multiples=[]
# for num in range(1500,2501):
#     if num%5==0 or num%7 == 0:
#         multiples.append(num)

# print(multiples)

###EX3
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# user_name = input('Write a name : ').capitalize()

# if user_name in names:
#     print(f'index : {names.index(user_name)}')


###EX4

# first = input ('Input the first number : ')
# second = input ('Input the second number : ')
# third = input ('Input the third number : ')

# if int(first) >= int (second) and int(first) >= int (third) :
#     print(f'The greatest number is : {first}')
# elif int(second) >= int (first) and int(second) >= int (third) :
#     print(f'The greatest number is : {second}')
# else:
#     print(f'The greatest number is : {third}')

###EX5

# alphabet = 'abcdefghijklmnopqrstuvwxyz'
# vowel = ['a', 'e', 'i', 'o', 'u', 'y']

# for letter in alphabet :
#     if letter in vowel :
#         print (f'The letter {letter} is a vowel')
#     else:
#         print (f'The letter {letter} is a consonant')