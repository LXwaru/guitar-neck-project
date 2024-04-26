from fastapi import FastAPI
from .routers import (
    template,
    notes
)



app = FastAPI()
app.include_router(template.router, tags=["template"])
app.include_router(notes.router, tags=["notes"])




