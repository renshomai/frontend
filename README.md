# LE5 Angular + ASP.NET Core Demo

## How to run
Backend:
1. cd C:\Users\<you>\source\repos\ItemApi\ItemApi
2. dotnet run  # now listening on http://localhost:5294

Frontend:
1. cd <project-root>\frontend
2. npm install
3. ng serve --open  # opens http://localhost:4200

## Endpoints
- GET  /api/posts
- GET  /api/posts/{id}
- POST /api/posts
- POST /api/auth/register
- POST /api/auth/login

## Features
- List posts, view details
- Register, login (token in localStorage), logout
- Create post (sends Authorization: Bearer <token>)

## Notes
- Dev CORS enabled in API (Program.cs)
- API base URL in `src/environments/environment.ts`

