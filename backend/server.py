from fastapi import FastAPI, APIRouter, Depends
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from database import get_db
from models import Lead

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

app = FastAPI()
api_router = APIRouter(prefix="/api")


class RegistrationCreate(BaseModel):
    name: str
    phone: str
    service: str
    district: str
    message: Optional[str] = ""
    language: Optional[str] = "en"


class RegistrationOut(BaseModel):
    id: str
    name: str
    phone: str
    service: str
    district: str
    message: Optional[str] = ""
    language: Optional[str] = "en"
    created_at: datetime

    class Config:
        from_attributes = True


@api_router.get("/")
async def root():
    return {"message": "Aditya Associate API"}


@api_router.post("/register", response_model=RegistrationOut)
async def create_registration(input: RegistrationCreate, db: AsyncSession = Depends(get_db)):
    lead = Lead(**input.model_dump())
    db.add(lead)
    await db.commit()
    await db.refresh(lead)
    return lead


@api_router.get("/registrations", response_model=List[RegistrationOut])
async def list_registrations(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Lead).order_by(Lead.created_at.desc()))
    return result.scalars().all()


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
