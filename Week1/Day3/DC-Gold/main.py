# def encrypt (text, s):
#     text_encrypted = ''
#     for char in text:
#         if char.isalpha() == True :
#             if char.islower() == True:
#                 text_encrypted+= chr((ord(char) + s - 97) % 26 + 97)
#             else:
#                 text_encrypted+= chr((ord(char) + s - 65) % 26 + 65)
#         else :
#             text_encrypted+= char
    
#     return text_encrypted

# print(encrypt('Hello! My name is Meryl.', 7))

# def decrypt (text, s):
#     text_decrypted = ''
#     for char in text:
#         if char.isalpha() == True :
#             if char.islower() == True:
#                 text_decrypted+= chr((ord(char) - s - 97) % 26 + 97)
#             else:
#                 text_decrypted+= chr((ord(char) - s - 65) % 26 + 65)
#         else :
#             text_decrypted+= char
    
#     return text_decrypted

# print(decrypt('Olssv! Tf uhtl pz Tlyfs.', 7))

# def encrypt (text, s):
#     text_encrypted = ''
#     for char in text:
#         if char.isalpha() == True :
            
#             if ((ord(char) + s)) > 122 :
#                     s=s-26
#             else :
#                     s=s

#             text_encrypted+= chr(ord(char) + s )
#         else :
#             text_encrypted+= char
    
#     return text_encrypted



def encrypt (text, s):
    text_encrypted = ''
    for char in text:
        if char.isalpha() :
            if char.islower():
                new_char = 0
                if ((ord(char) + s)) > 122 :
                    new_char= ord(char) + s - 26
                    text_encrypted+= chr(new_char )
                else:
            
                    text_encrypted+= chr(ord(char) + s )

            else:
                new_char = 0
                if ((ord(char) + s)) > 90 :
                    new_char=ord(char) + s - 26
                    text_encrypted+= chr(new_char)
                else:

                    text_encrypted+= chr(ord(char) + s )
        else :
            text_encrypted+= char
    
    return text_encrypted

# def encrypt(text, s):
#     text_encrypted = ''
    
#     for char in text:
#         if char.isalpha():
#             if char.islower():
#                 # Shift character and wrap around if it goes past 'z'
#                 new_char = ord(char) + s
#                 if new_char > ord('z'):
#                     new_char = ord('a') + (new_char - ord('z') - 1)
#                 text_encrypted += chr(new_char)
#             else:
#                 # Shift character and wrap around if it goes past 'Z'
#                 new_char = ord(char) + s
#                 if new_char > ord('Z'):
#                     new_char = ord('A') + (new_char - ord('Z') - 1)
#                 text_encrypted += chr(new_char)
#         else:
#             # Non-alphabet characters remain the same
#             text_encrypted += char
    
#     return text_encrypted

print(encrypt('Hello! My name is Meryl.', 7))