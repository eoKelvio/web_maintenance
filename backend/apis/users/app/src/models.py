from sqlalchemy import Integer, String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from .database import Base

class UserModels(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String, nullable=False)
    username: Mapped[str] = mapped_column(String, unique=True, nullable=False)
    password: Mapped[str] = mapped_column(String, nullable=False)
    role: Mapped[str] = mapped_column(String, nullable=False)
    team_id: Mapped[int] = mapped_column(Integer, ForeignKey("teams.id"))

    team: Mapped["TeamModels"] = relationship(back_populates="users")


class TeamModels(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String, nullable=False)
    leader_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"))

    users: Mapped["UserModels"] = relationship(back_populates="team")