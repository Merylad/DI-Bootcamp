import random

string=input('Write something 10 letters long :')

if len(string) > 10 :
    print ('This is too long !')
elif len(string)< 10 :
    print('This is too short!')
else :
    print('PERFECT!')

print(string[0], string[-1])

new_string = ''
for l in string:
    new_string+= l
    print (new_string)

random_string = ''.join(random.sample(string, 10))
print(f'random string : {random_string}')