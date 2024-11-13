from collections import Counter 

class Text :
    def __init__(self, text) :
        self.txt = text.lower().replace('.','').replace(',','').replace("'",' ').replace('!','').replace('?','').replace('\n','').replace('"', '').replace(';', '')

    @classmethod
    def text_instance(cls, file):
        with open(file, 'r', encoding= 'utf-8') as f:
            content = f.read()
            return content

    def frequency (self, word):
        li = self.txt.split(' ')
        count = li.count(word)
        return count
    
    def most_common (self):
        li = self.txt.split(' ')
        my_counter = Counter(li) 
        max_count = max(my_counter.values())
        most_common_words = [word for word, count in my_counter.items() if count == max_count]
        if len(most_common_words)>1 :

            print(f'The most commons word are : {', '.join(most_common_words)}.')
        else:
            print(f'The most common word is : {''.join(most_common_words)}.')
        return most_common_words
    
    def unique_words (self):
        li = self.txt.split(' ')
        my_counter = Counter(li) 
        unique = [word for word, count in my_counter.items() if count == 1]
        if len(unique)>1 :

            print(f'The unique words are : {', '.join(unique)}.')
        else:
            print(f'The unique word is : {''.join(unique)}.')
        return unique
    
my_txt = Text('A good book would sometimes cost as much as a good house.')

print(my_txt.frequency('house'))

my_txt.most_common()
print(my_txt.unique_words())

my_file_text = Text.text_instance('the_stranger.txt')
my_file = Text (my_file_text)

my_file.most_common()
my_file.unique_words()