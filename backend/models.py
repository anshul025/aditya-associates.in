import uuid
from sqlalchemy import Column, String, Text, DateTime, func
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


def generate_uuid():
    return str(uuid.uuid4())


class Lead(Base):
    __tablename__ = 'aditya_associate_leads'

    id = Column(String(36), primary_key=True, default=generate_uuid)
    name = Column(String(255), nullable=False)
    phone = Column(String(32), nullable=False, index=True)
    service = Column(String(255), nullable=False, index=True)
    district = Column(String(255), nullable=False)
    message = Column(Text, default="")
    language = Column(String(8), default="en")
    created_at = Column(DateTime(timezone=True), server_default=func.now(), index=True)
