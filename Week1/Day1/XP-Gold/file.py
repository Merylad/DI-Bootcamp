print(('Hello world\n'*4) + ('I love python\n')*4)

month = int(input('Write the number of a month (1 to 12) :'))

if 1<= month <= 3:
    print ("This is winter")
elif 4<= month <= 6 :
    print ('This is spring')
elif 7<= month <= 10 :
    print ('This is summer')
else :
    print('This is fall')