# 🌟 Exercise 1 : Pets

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese (Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
popi = Bengal('Popi', 2)
flufy = Chartreux('Flufy', 3)
felix = Siamese('Felix', 4)

all_cats = [popi, flufy, felix]

sara_pets = Pets(all_cats)

#sara_pets.walk()

# 🌟 Exercise 2 : Dogs

class Dog :
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight= weight

    def bark(self):
        return f'{self.name} is barking.'
    
    def run_speed (self) :
        return self.weight/(self.age*10)
    
    def fight(self, otherdog):
        winner = ''
        if self.run_speed() > otherdog.run_speed():
            winner = f'{self.name} is the winner.'
        elif self.run_speed() < otherdog.run_speed():
            winner = f'{otherdog.name} is the winner.'
        else:
            winner = 'It is a tie!'

        return winner
    
osia = Dog ('Osia', 3, 12)
shiva = Dog ('Shiva', 5, 10)
rex = Dog('Rex', 7, 7)

print(osia.bark())
print(shiva.run_speed())
print(shiva.fight(rex))
print(rex.fight(osia))
print(shiva.fight(osia))


# Exercise 4 : Family

class Family :
    def __init__(self, last_name):
        self.members = []
        self.last_name = last_name

    def born (self, **kwargs):
        self.members.append(kwargs)
        print ('Congratulations!')

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >=18 :
                    return False
                else:
                    return True
            
                
    def family_presentation (self):
        print(f'This is family {self.last_name} :')
        for member in self.members:
            hero_details = ', '.join(f"{key}: {value}" for key, value in member.items())
            print(hero_details)

        
                
family = Family('Dupont')
family.members=[
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]

family.born (name = 'John', age = 0, gender = 'Male', is_child = True)
print(family.members)

print (family.is_18('Michael'))
print (family.is_18('John'))

family.family_presentation()

#Exercise 5 : TheIncredibles Family

class TheIncredibles(Family):

    def use_power(self, name):
        for member in self.members :
            if member['name'] == name:
                if member['is_child'] == False:
                    print(f'The power of {name} is {member['power']}')
                else :
                    raise Exception (f'{name} is not old enough')
                
    def incredible_presentation (self):
        print('Here is our powerful family :')
        self.family_presentation()
            

family2 = TheIncredibles('Incredibles')
family2.members =  [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]

family2.use_power('Sarah')
family2.incredible_presentation()
family2.born(name = 'Jack', age = 1, gender = 'Male', is_child = True, power= 'Unknown', incredible_name = 'SuperJack' )
family2.incredible_presentation()


#OUTPUT
# This is family Dupont :
# name: Michael, age: 35, gender: Male, is_child: False
# name: Sarah, age: 32, gender: Female, is_child: False
# name: John, age: 0, gender: Male, is_child: True
# The power of Sarah is read minds
# Here is our powerful family :
# This is family Incredibles :
# name: Michael, age: 35, gender: Male, is_child: False, power: fly, incredible_name: MikeFly
# name: Sarah, age: 32, gender: Female, is_child: False, power: read minds, incredible_name: SuperWoman
# Congratulations!
# Here is our powerful family :
# This is family Incredibles :
# name: Michael, age: 35, gender: Male, is_child: False, power: fly, incredible_name: MikeFly
# name: Sarah, age: 32, gender: Female, is_child: False, power: read minds, incredible_name: SuperWoman
# name: Jack, age: 1, gender: Male, is_child: True, power: Unknown, incredible_name: SuperJack