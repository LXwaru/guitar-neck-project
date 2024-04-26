from pydantic import BaseModel
from Intervals import IntervalOut


class TriadIn(IntervalOut):
    root: IntervalOut
    third: IntervalOut
    fifth: IntervalOut

class TriadOut(BaseModel):
    name: str



    