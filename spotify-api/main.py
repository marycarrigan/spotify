from fastapi import FastAPI, Depends
from typing import Annotated
from fastapi.middleware.cors import CORSMiddleware
import requests
from fastapi.security import OAuth2PasswordBearer

app = FastAPI()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/current-user-profile")
def current_user_profile(token: Annotated[str, Depends(oauth2_scheme)]):
    headers = {"Authorization": "Bearer " + token}

    response = requests.get('https://api.spotify.com/v1/me', headers=headers)
    return response.json()
