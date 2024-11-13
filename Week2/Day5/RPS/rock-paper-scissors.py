from game import Game

def get_user_menu_choice():
    user_choice = input ('''
                         ROCK PAPER SCISSORS 
    Menu:
    (g) Play a game
    (x) Show scores and exit
     : ''').lower()
    
    if user_choice not in {'g', 'x'}:
        print ('only g or r')
        get_user_menu_choice()
    else:
        return user_choice
    
def print_results(results):
    print(f''' 
Game results:
        You won {results['win']} times
        You lost {results['loss']} times
        You drew  {results['draw']} times
        
        Thank you for playing !''')
    
def main():
    results = {
        'win' : 0,
        'loss': 0,
        'draw' : 0
    }
    while True :
        user_choice = get_user_menu_choice()
        if user_choice == 'g':
            new_game = Game ()
            result = new_game.play()
            results[result]+=1
        else:
            print_results(results)
            break

main()