import math

class Pagination:

    def __init__(self, items = [], pageSize = 10):
        self.items = items
        self.pageSize = pageSize
        self.totalPages = math.ceil(len(self.items)/pageSize)
        self.currentPage = 1


    def getVisibleItems(self):
        page = self.currentPage 
        visible_items = self.items[(page -1) * self.pageSize : (page * self.pageSize )]
        print (visible_items)


    def nextPage(self):
        if self.currentPage < self.totalPages:
            self.currentPage+=1
        else :
            self.currentPage == self.totalPages

        return self
    
    def prevPage(self):
        if self.currentPage > 1:
            self.currentPage-=1
        else:
            self.currentPage = 1
        return self

    def firstPage (self):
        self.currentPage = 1


    def lastPage (self):
        self.currentPage = self.totalPages

    def goToPage(self, pageNum):
        if pageNum > self.totalPages :
            self.currentPage = self.totalPages
        elif pageNum<1 :
             self.currentPage = 1
        else:
             self.currentPage = pageNum

alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)     

p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
p.nextPage().nextPage()
p.getVisibleItems()
p.prevPage()
p.getVisibleItems()
p.lastPage()
p.getVisibleItems()
p.goToPage(5)
p.getVisibleItems()
p.firstPage()
p.getVisibleItems()
p.prevPage()
p.getVisibleItems()
p.lastPage()
p.nextPage()
p.getVisibleItems()