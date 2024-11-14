# Part 1 : Quizz :
# Answer the following questions

# What is a class?
#  It allows you to define the structure and behavior of objects
# What is an instance?
# an object
# What is encapsulation?
# Making things private / cant modify
# What is abstraction?
#An abstract class is a blueprint for other classes. It can contain abstract methods (methods without implementation) that must be implemented by subclasses
# What is inheritance?
#When you have a child of a class and a parent
# What is multiple inheritance?
#grandparent parent and child 
# What is polymorphism?
#Same method into different classes that are overided

# What is method resolution order or MRO?
#The order where py is searching into the different classes where inheritance

from random import shuffle
from random import choice
class Deck :
    suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    def __init__(self):
        deck = []
        for suit in self.suits :
            for value in self.values :
                card = Card (suit, value)
                deck.append (card)
        self.deck = deck

    def shuffle_cards(self):
        
        shuffle(self.deck)

    def deal (self):
        self.shuffle_cards() 
        dealed_card = choice(self.deck)
        self.deck.remove(dealed_card)
        return dealed_card

class Card :
    def __init__ (self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"
    
my_deck = Deck()
print(my_deck.deck)
print(my_deck.deal())
print(my_deck.deck)


# [A of Hearts, 2 of Hearts, 3 of Hearts, 4 of Hearts, 5 of Hearts, 6 of Hearts, 7 of Hearts, 8 of Hearts, 9 of Hearts, 10 of Hearts, J of Hearts, Q of Hearts, K of Hearts, A of Diamonds, 2 of Diamonds, 3 of Diamonds, 4 of Diamonds, 5 of Diamonds, 6 of Diamonds, 7 of Diamonds, 8 of Diamonds, 9 of Diamonds, 10 of Diamonds, J of Diamonds, Q of Diamonds, K of Diamonds, A of Clubs, 2 of Clubs, 3 of Clubs, 4 of Clubs, 5 of Clubs, 6 of Clubs, 7 of Clubs, 8 of Clubs, 9 of Clubs, 10 of Clubs, J of Clubs, Q of Clubs, K of Clubs, A of Spades, 2 of Spades, 3 of Spades, 4 of Spades, 5 of Spades, 6 of Spades, 7 of Spades, 8 of Spades, 9 of Spades, 10 of Spades, J of Spades, Q of Spades, K of Spades]
# A of Diamonds
# [6 of Hearts, 9 of Clubs, Q of Clubs, 7 of Clubs, 3 of Diamonds, 8 of Spades, 10 of Clubs, 9 of Diamonds, 10 of Hearts, 6 of Diamonds, K of Spades, J of Diamonds, 2 of Clubs, 8 of Hearts, A of Clubs, 5 of Hearts, 6 of Spades, 7 of Diamonds, 4 of Diamonds, 2 of Diamonds, 4 of Clubs, 3 of Hearts, 9 of Spades, J of Spades, 8 of Diamonds, 7 of Hearts, 6 of Clubs, 2 of Hearts, K of Clubs, 7 of Spades, 3 of Spades, 5 of Diamonds, K of Hearts, Q of Diamonds, 10 of Diamonds, 10 of Spades, J of Clubs, 2 of Spades, K of Diamonds, Q of Hearts, 3 of Clubs, 5 of Clubs, J of Hearts, A of Spades, 9 of Hearts, 4 of Hearts, A of Hearts, Q of Spades, 5 of Spades, 4 of Spades, 8 of Clubs]