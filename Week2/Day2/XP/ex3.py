from main import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        info = f'{self.name} '
        for arg in args :
            info += arg.name + ' '
        info += 'all play together.'
        return info
    
    def do_a_trick(self):
        if self.trained :
            random_list=['does a barrel roll.', 'stands on his back legs.', 'shakes your hand.', 'plays dead.' ]
            random_string = random.choice(random_list)
            info = f'{self.name} {random_string}'
        else:
            info = f'{self.name} is not trained, he does no trick.'
        return info


dog1 = PetDog('filou', 2, 2)
dog2 = PetDog('neige', 1, 5)
dog3 = PetDog('faith', 7, 1)

print(dog1.play(dog2, dog3))

print(dog1.do_a_trick())
dog1.train()
print(dog1.do_a_trick())