from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Welcome to my dumb backend of my Web App!"}


@app.post("/")
async def make_root():
    return {}
