from fastapi import FastAPI, APIRouter
from .routers import template



app = FastAPI()
app.include_router(template.router, tags=["template"])





