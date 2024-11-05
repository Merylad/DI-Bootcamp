def encrypt (text, s):
    text_encrypted = ''
    for char in text:
        if char.isalpha() == True :
            if char.islower() == True:
                text_encrypted+= chr((ord(char) + s - 97) % 26 + 97)
            else:
                text_encrypted+= chr((ord(char) + s - 65) % 26 + 65)
        else :
            text_encrypted+= char
    
    return text_encrypted

print(encrypt('Hello! My name is Meryl.', 7))

def decrypt (text, s):
    text_decrypted = ''
    for char in text:
        if char.isalpha() == True :
            if char.islower() == True:
                text_decrypted+= chr((ord(char) - s - 97) % 26 + 97)
            else:
                text_decrypted+= chr((ord(char) - s - 65) % 26 + 65)
        else :
            text_decrypted+= char
    
    return text_decrypted

print(decrypt('Olssv! Tf uhtl pz Tlyfs.', 7))