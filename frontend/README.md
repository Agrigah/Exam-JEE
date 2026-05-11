# Frontend Angular - Vehicle Rental Exam JEE

Interface Angular moderne pour consommer l'API Spring Boot securisee par JWT.

## Lancement

```bash
cd frontend
npm install
npm start
```

Application: <http://localhost:4200>

Le proxy Angular redirige `/api` vers `http://localhost:8085`.

## Comptes demo

- admin / admin123
- employee / employee123
- client / client123

## Correction 404 login

Le frontend appelle directement `http://localhost:8085/api/auth/login` via `src/environments/environment.ts`.
Assurez-vous que le backend Spring Boot est demarre sur le port 8085 avant de cliquer sur Connexion.
