###################
#Challenge 1
###################

# word = list(input ('Write a word : '))
# user_dict = {}

# for i, char in enumerate(word) :
#     if char in user_dict.keys():
#         user_dict[char].append(i)
#     else:
#         user_dict[char] = [i]

# print (user_dict)

###################
#Challenge 2
###################

# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }

# wallet = "$300"

items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet = "$100" 

# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }

# wallet = "$1" 



def replace(word):
    new_word = word.replace('$', '').replace(',', '')
    return int(new_word)


def what_can_i_buy (dict, num):
    affordable = []
    for item in dict:

        price = replace(dict[item])
        if price <= replace(num):
            affordable.append(item)
            
    
    
    if len(affordable) == 0:
        return 'You cant by anything'
    
    affordable.sort()
    return affordable
    
print(what_can_i_buy(items_purchase, wallet))


