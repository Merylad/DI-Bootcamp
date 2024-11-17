def display_board(board) :
    print('WELCOME TO TIC TAC TOE   \n')
    print('*********************')
    for row in board :
        print ('*  ','  |  '.join(row), '  *')
        print('*  ','---| --- |---','  *')
    print('*********************')


def player_input(player, turn, board):
    print(f"Player {player}, it's your turn!")

    while True:
        try:
            user_row = int(input("Enter your row (1, 2, or 3): "))
            if user_row not in {1, 2, 3}:
                print("Invalid input! You can only choose 1, 2, or 3 for the row.")
                continue
        except ValueError:
            print("You must enter a number for the row.")
            continue

        try:
            user_col = int(input("Enter your column (1, 2, or 3): "))
            if user_col not in {1, 2, 3}:
                print("Invalid input! You can only choose 1, 2, or 3 for the column.")
                continue
        except ValueError:
            print("You must enter a number for the column.")
            continue

        
        user_row -= 1
        user_col -= 1

        
        if board[user_row][user_col] == ' ':
            board[user_row][user_col] = player
            break
        else:
            print("This place is already taken. Please choose another position.")

    return board

    



def check_winner(player, board):
    winner = False
    
    win_combination = [
    [(0,0), (0,1), (0,2)],
    [(1,0), (1,1), (1,2)],
    [(2,0), (2,1), (2,2)],
    [(0,0), (1,0), (2,0)],
    [(0,1), (1,1), (2,1)],
    [(0,2), (1,2), (2,2)],
    [(0,0), (1,1), (2,2)],
    [(0,2), (1,1), (2,0)]
    ]

    positions_x = []
    positions_o = []

    for i_row, row in enumerate(board):
        for i_col, col in enumerate(row):
            if col== 'X':
                positions_x.append((i_row, i_col))
            elif col == 'O':
                positions_o.append((i_row, i_col))

    for comb in win_combination :
        count = 0
        for position in comb :
        
            if player == 'X':

                if position in positions_x : 
                    count+=1
                if count == 3 :
                    winner= True
            else:

                if position in positions_o : 
                    count+=1
                if count == 3 :
                    winner = True
    
    return winner

def play_again ():
    user_answer = input ('Do you want to play again ? yes / no : ')
    if user_answer == 'yes':
        play()
    else :
        print('OK! See you soon!')
def play():
    list_board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]

    turn = 0

    display_board(list_board)

    for turn in range(9) :
        if turn%2 == 0 :
            player = 'X'
        else :
            player = 'O'

        player_input(player, turn, list_board)
        display_board(list_board)
        winner = check_winner (player, list_board)
        if winner == True :
            print(f'AWESOMMMEEE {player} you won!')
            play_again()
            break

        if turn == 8:
            print ('Its a tie !')
            play_again()
            break


play()