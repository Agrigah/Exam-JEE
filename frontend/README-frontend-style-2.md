# Frontend Style 2 - RentFleet

Cette version remplace seulement le frontend Angular. Elle garde les memes services et les memes endpoints backend:

- `POST http://localhost:8085/api/auth/login`
- `GET http://localhost:8085/api/dashboard/stats`
- `GET/POST/PUT/DELETE http://localhost:8085/api/agencies`
- `GET/POST/PUT/DELETE http://localhost:8085/api/vehicles`
- `GET/POST/PATCH http://localhost:8085/api/rentals`

## Installation

1. Lancer le backend Spring Boot:

```bash
cd backend
mvn spring-boot:run
```

2. Remplacer l'ancien dossier `frontend` par ce dossier `frontend`.

3. Lancer Angular:

```bash
cd frontend
npm install
npm start
```

Comptes demo:

- admin / admin123
- employee / employee123
- client / client123

Si ton backend utilise le port 8080, modifie `src/environments/environment.ts`:

```ts
apiBaseUrl: 'http://localhost:8080/api'
```
