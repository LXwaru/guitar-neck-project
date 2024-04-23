from fastapi import APIRouter
from typing import Union
from api.models.template import Item


router = APIRouter()

@router.get("/")
async def read_root():
    return {"Hello bitches": "World"}


@router.get("/items/{item_id}")
async def read_item(
    item_id: int,
    q: Union[str, None] = None,
    ):
    return {"item_id": item_id, "q": q}

@router.put("/items/{item_id}")
async def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}

