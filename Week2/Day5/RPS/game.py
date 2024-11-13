import random

class Game :
    def get_user_item(self):
        while True:
            user_item = input ('Select (r)ock, (p)aper, or (s)cissors : ').lower()
            if user_item not in {'r', 'p', 's'}:
                print('You can only wite r p or s')
            else:
                return user_item

    def get_computer_item(self):
        li = ['r', 'p', 's']
        computer_item = random.choice(li)
        return computer_item
    
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item :
            return 'draw'
        
        win_conditions = {
        'r': 's',  
        'p': 'r',  
        's': 'p'   
        }

    
        if win_conditions[user_item] == computer_item:
            return 'win'
        else:
            return 'loss'
       
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        if result == 'win':
            print(f''' 
            You selected {user_item}
            The computer selected {computer_item}
            You won :-)''')
        elif result == 'loss':
            print(f''' 
            You selected {user_item} 
            The computer selected {computer_item}
            You lost :-(''')
        else:
            print(f''' 
            You selected {user_item}
            The computer selected {computer_item}
            You drew :-/''')

        return result