class AnagramChecker:
    def __init__(self):

        with open('words.txt', 'r', encoding= 'utf-8') as f:
            content = f.read().lower()
            list_content = content.split('\n')

        self.words = list_content


    def is_valid_word(self,word):
        if word in self.words:
            return True
        else :
            return False
        
    def get_anagrams(self, word):
        anagram_list = []
        for w in self.words :
            if sorted(w) == sorted(word):
                anagram_list.append(w)
        anagram_list.remove(word)
        return anagram_list

