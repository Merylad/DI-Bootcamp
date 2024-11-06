matrix = '''7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!'''

matrix_list_of_str = matrix.split('\n')

# matrix_list_of_str = ['7ii', 'Tsx', 'h%?', 'i #', 'sM ', '$a ', '#t%', '^r!']

matrix_list=[]

for item in matrix_list_of_str:
    matrix_list.append(list(item))

# print(matrix_list)

# matrix_list = [
#     ['7', 'i', 'i'], 
#     ['T', 's', 'x'], 
#     ['h', '%', '?'], 
#     ['i', ' ', '#'], 
#     ['s', 'M', ' '], 
#     ['$', 'a', ' '], 
#     ['#', 't', '%'], 
#     ['^', 'r', '!']
# ]

text = ''

for i in range(3):
    for item in matrix_list:
        text+= item [i]

# text = '7This$#^is% Matrix?#  %!'

decrypted_text = ''

previous_char = ''

for char in text :
    if char.isalpha():
        decrypted_text+=char
    elif char.isalpha() == False and previous_char.isalpha():
        decrypted_text+=' '
    previous_char = char

    

# print(decrypted_text)
# decrypted_text = 'This is Matrix'
