from pydantic import BaseModel
from typing import Union, Optional

class Item(BaseModel):
    name: Optional[str]
    price: Optional[float]
    is_offer: Optional[Union[bool, None]] = None