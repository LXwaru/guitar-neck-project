from .notes import Notes

class Interval:
    __init__(self, Note)


























class Intervals:
    def __init__(self, root, target):
        self.root = root
        self.target = target

    def interval(self, root, target):
        root = Notes(self.root)
        target = Notes(self.target)
        if root + 0 == target:
            return "P1"
        if root + 1 == target:
            return "m2"
        if root + 2 == target:
            return "M2"
        if root + 3 == target:
            return "m3"
        if root + 4 == target:
            return "M3"
        if root + 5 == target:
            return "P4"
        if root + 6 == target:
            return "TT"
        if root + 7 == target:
            return "P5"
        if root + 8 == target:  
            return "m6"
        if root + 9 == target:
            return "M6"
        if root + 10 == target:
            return "m7"
        if root + 11 == target:
            return "M7"
        if root + 12 == target:
            return "P8"
        
