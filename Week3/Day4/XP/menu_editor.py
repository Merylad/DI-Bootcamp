from menu_manager import MenuManager
from menu_item import MenuItem
from database import connection, cursor

def show_user_menu():
    print('''Welcome! Here is the menu:
    View an Item (V)
    Add an Item (A)
    Delete an Item (D)
    Update an Item (U)
    Show the Menu (S)
    Exit (Q)''')
    user_answer = input('Your choice: ')
    return user_answer

def add_item_to_menu():
    name = input ('Item name: ')
    price = int(input('Item price: '))
    item = MenuItem(name, price)
    item.save_item()

def remove_item_from_menu(name):
    item =  MenuManager.get_by_name(name)
    if item:
        meal = MenuItem(item[1], item[2])
        meal.delete_item()
        print('The item was successfully deleted')
    else:
        print ('The item is not in the menu, sorry!')

def update_item_from_menu():
    name = input ('Item name: ')
    new_data = input ('Item new_name or new_price: ')

    if new_data.isdigit():
        new_data = int(new_data)

    item = MenuManager.get_by_name(name)
    if item:
        meal = MenuItem(item[1], item[2])
        meal.update_item(new_data)
    else :
        print ("The item is not in the menu we can't update it")

def show_restaurant_menu():
    print(MenuManager.all_items())

def main():

    while True:
        user_answer = show_user_menu()
        if user_answer == 'V':
            item = input('Which item do you want to view ? ')
            print(MenuManager.get_by_name(item))
        elif user_answer == 'A':
            add_item_to_menu()
        elif user_answer == 'D':
            item = input('Which item do you want to delete ? ')
            remove_item_from_menu(item)
        elif user_answer == 'U':
            update_item_from_menu()
        elif user_answer == 'S':
            print('Here is the menu :')
            show_restaurant_menu()
        elif user_answer == 'Q':
            show_restaurant_menu()
            break
        else:
            print ('You need to write V, A, D, U, S or Q')

    cursor.close()
    connection.close()


main()
       