# macdonald = Farm("McDonald")
# macdonald.add_animal('cow',5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
# macdonald.add_animal('goat', 12)
# print(macdonald.get_info())


# McDonald's farm

# cow : 5
# sheep : 2
# goat : 12

#     E-I-E-I-0!

class Farm ():
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, animal, number = 1):
        if animal in self.animals.keys():
            self.animals[animal] += number
        else :
            self.animals[animal] = number

    def get_info(self):
        info = ''
        for key, value in self.animals.items():
            info += key + ' : ' + str(value) + '\n'

        info += '        E-I-E-I-0!'

        return info
    
    def get_animal_types (self):
        animal_types = []
        for animal in self.animals.keys():
            animal_types.append(animal)
        return animal_types
    
    def get_short_info(self):
        animal_list = self.get_animal_types()
        info_str = f'{self.name} farm has '
        for animal in animal_list:
            if animal == animal_list[-1] :
                
                if self.animals[animal] >1 :
                    info_str += 'and ' + animal + 's.'
                else :
                    info_str += 'and ' + animal + '.'
            else:
                if self.animals[animal] >1 :
                    info_str += animal + 's '
                else :
                    info_str += animal + ' '

        return info_str

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('chicken')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

print(macdonald.get_animal_types())

print(macdonald.get_short_info())
