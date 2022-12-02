# Run 
1. First install [poetry](https://python-poetry.org/)

2. Install dependencies 
```bash
poetry install
```

3. Activate the virtual env)
```bash
poetry shell
```

4. Launch the server
```bash
uvicorn fest_api.main:app --reload
```