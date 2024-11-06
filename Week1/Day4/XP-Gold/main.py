#Exercise 1 : When will I retire ?

def get_age(year, month, day):
    today_day = 6
    today_month = 11
    today_year = 2024

    current_age = today_year - year 

    if today_month < month : 
        current_age -=1

    if today_month == month and today_day < day:
        current_age -=1
    
    return(current_age)

def can_retire(gender, date_of_birth):
    birth_list = date_of_birth.split('/')
    year = int(birth_list[0])
    month = int(birth_list[1])
    day = int(birth_list[2])

    current_age = get_age(year, month, day)
    can_retire=False

    if gender == 'men' and current_age >= 67 :
        can_retire = True    
    elif gender == 'women' and current_age >= 62 :
        can_retire = True    
    
    return can_retire

# print(can_retire('men','1986/12/03'))    false
# print(can_retire('women','1951/05/20'))   true
# print(can_retire('men','1952/01/28'))     true
# print(can_retire('women','1988/11/24'))   false

# user_gender = input('What is your gender (men / women) ? ')
# user_birthdate = input('What is your birthdate (yyyy/mm/dd) ? ')

# retire = can_retire(user_gender, user_birthdate) 

# if retire == True :
#     print ('You can retire.')
# else :
#     print('You can not retire.')

#Exercise 2 : Sum

def sum_function(x):
    string_x = str(x)
    num_list = []
    for i in range(1,5):
        num_list.append(int(string_x*i))
    
    return sum(num_list)

# print(sum_function(3))

#Exercise 3 : Double Dice
import random
def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    count = 0
    while True:
        count+=1
        dice1=throw_dice()        
        dice2 = throw_dice()
        
        if dice1 == dice2 :
            break
    
    return count

# print(throw_until_doubles())

def main():
    result_list=[]
    for i in range(100):
        result = throw_until_doubles()
        result_list.append(result)

    total_throws = sum(result_list)
    print(f'In total i made {total_throws} throws to reach 100 doubles.')
    average = round((total_throws/100),2)
    print(f'The average is {average}.')

    

main()
