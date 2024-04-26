from pydantic import BaseModel

class NoteIn(BaseModel):
    name: str
    value: int

class NoteOut(BaseModel):
    name: str
    value: int