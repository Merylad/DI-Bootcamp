#########
#EX1
#########

# my_fav_numbers = {3,8,10,24}
# my_fav_numbers.add(20)
# my_fav_numbers.add(28)
# print(my_fav_numbers)
# my_fav_numbers.discard(28)
# print(my_fav_numbers)

# friend_fav_numbers= {19, 2, 16}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

#########
#EX2
#########

#Given a tuple which value is integers, is it possible to add more integers to the tuple?
# ----> no we can't change a tuple

#########
#EX3
#########

# basket = ["Banana", "Apples", "Oranges", "Blueberries"];
# # Remove “Banana” from the list.
# basket.remove('Banana')
# print(basket)

# # Remove “Blueberries” from the list.
# basket.remove('Blueberries')
# print(basket)

# # Add “Kiwi” to the end of the list.
# basket.append('Kiwi')
# print(basket)

# # Add “Apples” to the beginning of the list.
# basket.insert(0,'Apples')
# print(basket)

# # Count how many apples are in the basket.
# num_apples = basket.count('Apples')
# print(num_apples)

# # Empty the basket.
# basket.clear()

# Print(basket)
# print(basket)

#########
#EX4
#########
#Recap – What is a float? What is the difference between an integer and a float?
# A float is with decimal values

my_list = list(range(3,11))
float_list = []
float_and_int = []
for num in my_list:    
    float_list.append(num/2)

for num in float_list:
    if num%1 == 0:
        float_and_int.append(int(num))
    else:
        float_and_int.append(num)

print(float_and_int)

# print (float_list)

#Can you think of another way to generate a sequence of floats?
#using numpy.arange() Function

#########
#EX5
#########

# for num in range(1,21):
#     print(num)

# for num in range(1,21):
#     if num%2 == 0 :
#         print(num)

#########
#EX6
#########

# while True:
#     user_name = input('What is your name ?')
#     if user_name.lower() == 'meryl':
#         break

#########
#EX7
#########



# user_fruits = input('Write your favorite fruits and separate them by a space : ')
# fav_fruits = user_fruits.lower().split()
# print (fav_fruits)

# while True:
#     fruit= input ('Write a fruit, type quit to exit : ')
#     if fruit.lower() in fav_fruits :
#         print('You chose one of your favorite fruits! Enjoy!')
#     elif fruit.lower() == 'quit':
#         break
#     else:
#         print('You chose a new fruit. I hope you enjoy')


#########
#EX8
#########

# pizza_toppings = []
# price = 0

# while True:
#     user_topping = input ('Write any topping you want, one by one, type quit when you finished : ')
#     if user_topping.lower() == 'quit' :
#         print(f'It will cost you {price} $')
#         break
#     else:
#         pizza_toppings.append(user_topping)
#         price = 10 + 2.5*len(pizza_toppings)
#         print(f'Ok i add {user_topping} to your pizza')


#########
#EX9
#########

# family = input ('Write the ages in your family and separate the ages by a space : ')
# family_ages= family.split()

# family_price = 0
# for age in family_ages:
#     if 3<=int(age)  <12 :
#         family_price +=10
#     elif int(age)>=12 :
#         family_price += 15

# print(f'The ticket prices for the cinema will cost you {family_price} $')

# teenagers_names = ['Michael', 'Florian', 'Alexis', 'Yohann', 'Gerald', 'Fabrice']

# for teenage in teenagers_names:
#     age = input (f'Hey {teenage}, how old are you ? ')
#     if int(age) < 16 or int(age) >21 :
#         teenagers_names.remove (teenage)
#         print(f'Sorry {teenage} you dont have the required age you have been deleted')

# print (teenagers_names)

#########
#EX10
#########

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# while 'Pastrami sandwich' in sandwich_orders:
#     sandwich_orders.remove('Pastrami sandwich')


# finished_sandwiches = []

# for sandwich in sandwich_orders[:]:
#     sandwich_orders.remove(sandwich)
#     finished_sandwiches.append(sandwich)

# for sandwich in finished_sandwiches:
#     print(f'I made your {sandwich}')