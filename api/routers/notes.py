from fastapi import APIRouter
from api.models.notes import NoteIn, NoteOut
from api.queries.notes import NoteQueries

router = APIRouter()

@router.get("/notes/{pitch}", response_model=NoteOut)
async def get(
    pitch: str
    ) -> NoteOut:
    return NoteQueries().get_one(pitch)
