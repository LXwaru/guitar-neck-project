from api.models.notes import NoteOut
from api.utility_functions.notes import note

class NoteQueries:
    def get_one(self, pitch: str) -> NoteOut:
        return NoteOut(
            name=pitch, 
            value=note(pitch)
            )