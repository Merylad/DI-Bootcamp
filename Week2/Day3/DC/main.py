import math

class Circle :
    def __init__(self, radius = None, diameter = None) :
        if radius is None :
            self.radius = diameter/2
            self.diameter = diameter
        elif diameter is None:
            self.radius = radius
            self.diameter = radius *2
        else :
            raise ValueError('You have to provide either radius or diameter')
    
    def __str__(self):
        return f'The circle has a radius of {self.radius} and a diameter of {self.diameter}'
    
    def __repr__(self):
        return f'Circle : radius = {self.radius}'
    
    def __add__(self, othercircle):
        if isinstance(othercircle, Circle):
            new_circle = Circle(radius=self.radius + othercircle.radius)
            return new_circle
        else:
            raise TypeError ('You can only add 2 circles')
    
    def __lt__(self, othercircle):
        if isinstance(othercircle, Circle):
            if self.radius < othercircle.radius:
                return True
            else: 
                return False
        else:
            raise TypeError ('You can only compare 2 circles')
    
    def __eq__(self, othercircle):
        if isinstance(othercircle, Circle):
            if self.radius == othercircle.radius:
                return True
            else: 
                return False
        else:
            raise TypeError ('You can only compare 2 circles')
        
    def area (self):
        return math.pi*self.radius**2
    
    def circumference(self):
        return 2* math.pi * self.radius
    
    @classmethod
    def sort_circles(cls, list_circles):
        return sorted(list_circles)

circle1 = Circle(radius=7)
circle2= Circle(diameter=10)

print(circle1)
print(circle2)

print(circle1.area())
print(circle2.circumference())

circle3 = circle1+circle2
print(circle3)

print(circle1>circle2)
print(circle2 == circle3)

circles_list = [circle1, circle2, circle3]
print(Circle.sort_circles(circles_list))