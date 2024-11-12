# 🌟 Exercise 1: Currencies

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        if self.amount > 1 :
            return f'{self.amount} {self.currency}s'
        else:
            return f'{self.amount} {self.currency}'
    
    def __int__(self):
        return self.amount
    
    def __repr__(self):
        return str(self)
        
    def __add__(self, num):
        if isinstance(num, int):
             self.amount += num 
        elif isinstance (num, Currency):
            if num.currency == self.currency :
                 self.amount += num.amount
            else:
                raise TypeError('Two different currencies cant be added')
        else :
            raise ValueError('This can not be added')
        
        return self
            
    def __iadd__(self, num):
        if isinstance(num, int):
             self.amount += num 
        elif isinstance (num, Currency):
            if num.currency == self.currency :
                 self.amount += num.amount
            else:
                raise TypeError('Two different currencies cant be added')
        else :
            raise ValueError('This can not be added')
        
        return self
    
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)


# print(str(c1))
# print(int(c1))
# print(repr(c1))
# c1+5
# print(c1)
# c1+c2
# print(c1)
# c1+=5
# print(c1)

# c1 + c3


# 🌟 Exercise 3: String module

import string 
import random

letters = string.ascii_letters
random_liste = []
for i in range(5):
    random_liste.append(random.choice(letters))

random_string = ''.join(random_liste)

print(random_string)


# 🌟 Exercise 4 : Current Date
from datetime import datetime
from datetime import date

today = date.today()
print (today)

# Exercise 5 : Amount of time left until January 1st

def time_till_january ():
    return datetime(2025,1,1) - datetime.now()

print(time_till_january())

# Exercise 6 : Birthday and minutes

def minutes_lived ( birthday):
    date_format = "%d/%m/%Y"
    birthdate = datetime.strptime(birthday, date_format)
    now = datetime.now()
    time_lived = now - birthdate
    minutes = time_lived.total_seconds() // 60
    print(f"You have lived approximately {int(minutes)} minutes so far.")

minutes_lived('24/11/1988')

# Exercise 7 : Faker Module

from faker import Faker

fake = Faker()

users = []

def add_user():
    user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code()
    }
    users.append(user)

for _ in range(5):
    add_user()

for user in users:
    print(user)

# {'name': 'Anthony Ortega', 'address': '31250 Wilson Ville\nGarciastad, SD 34881', 'language_code': 'mi'}
# {'name': 'Timothy Foster', 'address': '474 Eric Bypass\nAnnshire, MI 07201', 'language_code': 'rw'}
# {'name': 'Angelica Gonzalez', 'address': '978 Simpson Shoals\nKathrynshire, AL 25792', 'language_code': 'hi'}
# {'name': 'Preston Cook', 'address': '3429 Price Ramp Apt. 748\nEast Sandraside, TN 84750', 'language_code': 'mhr'}
# {'name': 'Robert Miller', 'address': '82306 Nancy Shores\nCuevasfort, VT 67576', 'language_code': 'cmn'}