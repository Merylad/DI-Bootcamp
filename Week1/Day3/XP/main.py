###EX1

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# my_dictionary = zip (keys, values)

# print(dict(my_dictionary))



###EX2

# family = {
#     "rick": 43, 
#     'beth': 13, 
#     'morty': 5, 
#     'summer': 8
# }

# total = 0

# for member in family:
#     if 3<=family[member]<12:
#         total+=10
#     elif family[member] >=12:
#         total+=15

# print(f'The total family cost is {total} $')

# new_family = {}

# while True:
     
#     user_family = input( 'Write the name and the age seperated by a space. Type exit to stop : ')
    
#     if user_family == 'exit':
#         break
     
#     else :
        
#         user_family_list = user_family.split()
#         new_family[user_family_list[0]] = user_family_list[1]

   

# print(new_family)


###EX3

# brand = {
#     'name': 'Zara' ,
#     'creation_date': 1975 ,
#     'creator_name': 'Amancio Ortega Gaona' ,
#     'type_of_clothes': ['men', 'women', 'children', 'home'] ,
#     'international_competitors': ['Gap', 'H&M', 'Benetton'] ,
#     'number_stores': 7000 ,
#     'major_color': {
#         'France': 'blue', 
#         'Spain': 'red', 
#         'US':' pink, green'}
# }

# # 3. Change the number of stores to 2.

# brand['number_stores'] = 2
# # print(brand)

# #4. Print a sentence that explains who Zaras clients are.


# # clients = ''

# # for client in brand['type_of_clothes']:
# #     if brand['type_of_clothes'][-1] == client:        
# #         clients += 'and '+ client
# #     else: clients += client + ' '

# # print(f'Zaras clients are {clients}.')

# #5. Add a key called country_creation with a value of Spain.
# brand['country_creation'] = 'Spain'
# # print(brand)

# # 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.

# if 'international_competitors' in brand.keys():
#     brand['international_competitors'].append('Desigual')

# # print(brand)

# # 7. Delete the information about the date of creation.
# del brand['creation_date']
# # print(brand)

# #8. Print the last international competitor.
# last = brand['international_competitors'][-1]
# # print(last)

# #9. Print the major clothes colors in the US.
# # print(brand['major_color']['US'])

# #10. Print the amount of key value pairs (ie. length of the dictionary).
# # print(len(brand))

# #11. Print the keys of the dictionary.
# # print(brand.keys())

# more_on_zara = {
#     'creation_date': 1975 ,
#     'number_stores': 10000,
# }

# brand.update(more_on_zara)
# # print(brand)

# # 14. Print the value of the key number_stores. What just happened ?
# print(brand['number_stores'])

# #the number is 10 000 bc the key already exists so this is overwriting



################EX 4

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

disney_users_A = {}

for i, name in enumerate(users):
    disney_users_A[name] = i

print(disney_users_A)

disney_users_B= {}

for i, name in enumerate(users):
    disney_users_B[i] = name

print(disney_users_B)

disney_users_C= {}

users.sort()
for i, name in enumerate(users):
    disney_users_C[i] = name

print(disney_users_C)

disney_users_A = {}

for i, name in enumerate(users):
    if 'i' in name.lower():

        disney_users_A[name] = i

print(disney_users_A)

disney_users_A = {}
for i, name in enumerate(users):
    print(name.lower()[0])
    if name.lower()[0] == 'm' or name.lower()[0] == 'p':

        disney_users_A[name] = i

print(disney_users_A)