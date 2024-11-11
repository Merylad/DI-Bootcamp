# 🌟 Exercise 1: Cats

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat ('mimi', 2)
cat2 = Cat ('felix', 5)
cat3 = Cat ('neige', 1)

def oldest_cat (list_cats) :
    oldest = ''
    previous_age = 0
    for cat in list_cats :
        if cat.age > previous_age :
            previous_age = cat.age 
            oldest = cat

    return oldest.name

# print(oldest_cat([cat1, cat2, cat3]))

# 🌟 Exercise 2 : Dogs

class Dog :
    def __init__(self, name, height):
        self.name = name
        self.height = height
            
    def bark(self):
        print(f'{self.name} goes WOOF!')

    def jump(self):
        print(f'{self.name} is jumping {self.height*2} cm')

davids_dog=Dog('Rex', 50)

# print(davids_dog.name, davids_dog.height)
# davids_dog.bark()
# davids_dog.jump()

sarahs_dog=Dog('Teacup', 20)
# print(sarahs_dog.name, sarahs_dog.height)
# sarahs_dog.bark()
# sarahs_dog.jump()

def bigger_dog(dogs):
    bigger = ''
    previous_height = 0
    for dog in dogs :
        if dog.height > previous_height :
            previous_height = dog.height
            bigger = dog

    print(f'The bigger dog is {bigger.name}')

# bigger_dog([sarahs_dog, davids_dog])

# 🌟 Exercise 3 : Who’s the song producer?

class Song :
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song (self):
        for lyr in self.lyrics:
            print(lyr)

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()

# Exercise 4 : Afternoon at the Zoo

class Zoo :
    def __init__(self, name):
        self.name = name
        self.animals = []

    def add_animal (self, animal):
        if animal not in self.animals:
            self.animals.append(animal)

    def get_animals (self):
        for animal in self.animals:
            print(animal)
    
    def sell_animal (self, animal):
        if animal in self.animals:
            self.animals.remove(animal)
        else:
            print('You can not sell an animal that you dont have')

    def sort_animals (self):
        sorted_animals_letter = {}
        sorted_animals_number = {}
        
        lower_animals = [animal.lower() for animal in self.animals]

        for animal in lower_animals :
            if animal[0] in sorted_animals_letter :
                sorted_animals_letter[animal[0]].append (animal)
            else :
                sorted_animals_letter[animal[0]] = [animal]

            #sorted_animals_letter={'a': ['ape'], 'b': ['baboon', 'bear'], 'c': ['cat', 'cougar'], 'e': ['eel', 'emu']}

            #enumerate(sorted_animals_letter) ={0: 'a', 1: 'b', 2: 'c', 3: 'e'}

        for index, letter in enumerate(sorted_animals_letter):
            if len(sorted_animals_letter[letter]) == 1 :
                sorted_animals_number[index+1] = ''.join(sorted_animals_letter[letter])
            else:
                sorted_animals_number[index+1] = sorted(sorted_animals_letter[letter])

        print(sorted_animals_letter)

        #sorted_animals_number={1: 'ape', 2: ['baboon', 'bear'], 3: ['cat', 'cougar'], 4: ['eel', 'emu']}

        return sorted_animals_number
    
    def get_groups (self):
        animals_dict = self.sort_animals()
        for group, animals in animals_dict.items():
            print(f'In the group {group} you have {', '.join(animals)}')
    
my_zoo = Zoo ('ramat_gan_safari')
my_zoo.add_animal('ape')
my_zoo.add_animal('Baboon')
my_zoo.add_animal('Bear')
my_zoo.add_animal('Cat')
my_zoo.add_animal('Cougar')
my_zoo.add_animal('Eel')
my_zoo.add_animal('Emu')
my_zoo.add_animal('Emu')
my_zoo.add_animal('turtle')

my_zoo.sell_animal('turtle')
my_zoo.sell_animal('crocodile')

my_zoo.get_animals()

print(my_zoo.sort_animals())

my_zoo.get_groups()

# In the group 1 you have a, p, e
# In the group 2 you have baboon, bear
# In the group 3 you have cat, cougar
# In the group 4 you have eel, emu