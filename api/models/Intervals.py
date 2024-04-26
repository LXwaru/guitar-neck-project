from pydantic import BaseModel
from Notes import NoteOut

class IntervalIn(NoteOut):
    root: NoteOut
    target: NoteOut

class IntervalOut(BaseModel):
    interval: str
