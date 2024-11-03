#EX3
 
    # >>> 3 <= 3 < 9   TRUE
    # >>> 3 == 3 == 3   TRUE
    # >>> bool(0)   FALSE
    # >>> bool(5 == "5")   FALSE
    # >>> bool(4 == 4) == bool("4" == "4")   TRUE
    # >>> bool(bool(None))   FALSE
    # x = (1 == True)
    # y = (1 == False)
    # a = True + 4
    # b = False + 10

    # print("x is", x)  TRUE
    # print("y is", y)  FALSE
    # print("a:", a) 5
    # print("b:", b) 10

#EX 4

# my_text = """Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
#            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
#            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
#            laboris nisi ut aliquip ex ea commodo consequat. 
#            Duis aute irure dolor in reprehenderit in voluptate velit 
#            esse cillum dolore eu fugiat nulla pariatur. 
#            Excepteur sint occaecat cupidatat non proident, 
#            sunt in culpa qui officia deserunt mollit anim id est laborum."""

# print (len("".join(my_text.split())))

#EX 5

# Initialize variables
longest_sentence = ""
longest_length = 0

while True:
    
    sentence = input("Enter the longest sentence you can without the letter 'A': ")
    
    
    if 'a' in sentence.lower():
        print("Oops! Your sentence contains the letter 'A'. Try again.")
    else:
        
        if len(sentence) > longest_length:
            longest_sentence = sentence
            longest_length = len(sentence)
            print("Congratulations! You've set a new longest sentence.")
        else:
            print("Good try, but it's not the longest yet.")
    
    
    print(f"Current longest sentence without 'A': {longest_sentence} (Length: {longest_length})")
