import pg8000

connection = pg8000.connect(database = 'bootcamp',
                              user = 'postgres',
                              password = 'naomie',
                              host='localhost',
                              port='5432')

cursor = connection.cursor()


# users = {
#     'john' : 'hello123',
#     'emma': 'boker456',
#     'chloe' : 'idk789'
# }

# def sign_in():
#     while True :
#         username = input ('Chose a username : ')
#         if username in users :
#             print('This username is not available please chose another one')
#         else :
#             userpassword = input ('Chose a password : ')
#             users[username] = userpassword
#             print ('Successfully registered now log in ')
#             break

# while True :
#     user_name = input ('Type your name or exit to quit : ')
#     if user_name == 'exit' :
#         break

#     elif user_name in users:
#         user_password = input('password : ')
#         if users[user_name] == user_password:
#             print('Successfully logged in')
#             logged_in = user_name
#             break
#         else :
#             print ('The password is not matching')
#     else :
#         print(f'There is no one called {user_name}')
#         answer = input('Would you like to sign in ? Y/N : ')
#         if answer == 'Y':
#             sign_in()
#         else :
#             print ('OK, Bye !')
#             break

def get_users ():
    query = '''SELECT username FROM users'''
    cursor.execute(query)
    connection.commit()
    usernames = cursor.fetchall()

    return usernames

users = get_users()

def sign_in():
    
    while True :
        username = input ('Chose a username : ')
        if [username] in users :
            print('This username is not available please chose another one')
        else :
            userpassword = input ('Chose a password : ')
            query = f'''INSERT INTO users (username, userpassword) VALUES ('{username}','{userpassword}' )'''
            print ('Successfully registered now log in ')
            cursor.execute(query)
            connection.commit()
            break


while True :
    user_name = input ('Type your name or exit to quit : ')
    if user_name == 'exit' :
        break

    elif [user_name] in users:
        user_password = input('password : ')
        query = f'''SELECT userpassword FROM users WHERE username = '{user_name}' '''
        cursor.execute(query)
        connection.commit()
        DB_password = cursor.fetchone()[0]
        if DB_password == user_password:
            print('Successfully logged in')
            logged_in = user_name
            break
        else :
            print ('The password is not matching')
    else :
        print(f'There is no one called {user_name}')
        answer = input('Would you like to sign in ? Y/N : ')
        if answer == 'Y':
            sign_in()
        else :
            print ('OK, Bye !')
            break

