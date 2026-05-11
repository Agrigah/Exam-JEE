# 🚗 Vehicle Rental Management System - Master SDIA

## 📌 Présentation du projet

Ce projet est réalisé dans le cadre du module **Architecture Distribuée et Middleware** à l’**ENSET Mohammedia**.

Il s’agit d’une application de gestion de location de véhicules multi-agences. Le système permet la gestion des agences, des véhicules, des utilisateurs et des locations. L’application repose sur une architecture JEE moderne avec un backend Spring Boot sécurisé par JWT.

---

## 🎯 Objectifs du projet

L’objectif principal de ce projet est de développer une application web permettant de gérer efficacement un système de location de véhicules.

Les principales fonctionnalités sont :

- Gestion des agences de location
- Gestion des véhicules : voitures et motos
- Gestion des utilisateurs selon leurs rôles
- Authentification sécurisée avec JWT
- Création et suivi des locations
- Calcul automatique du prix total d’une location
- Documentation et test des API avec Swagger UI

---

## 🏗️ Architecture technique

L’application repose sur une architecture **N-Tiers** découplée :

### Backend

- Spring Boot 3.x
- Spring Data JPA
- Hibernate
- Spring Security
- JWT Authentication
- Maven

### Frontend

- Angular 20.x
- Interface réactive et responsive

### Base de données

- H2 Database
- Mode In-Memory pour les tests

### Documentation API

- Swagger UI
- OpenAPI 3

---

## 📁 Structure du projet
```text
Exam-JEE/
│
├── backend/
│   │
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── ma/enset/agrigahaya/examjee/
│   │   │   │       ├── controllers/
│   │   │   │       ├── entities/
│   │   │   │       ├── repositories/
│   │   │   │       ├── services/
│   │   │   │       ├── security/
│   │   │   │       ├── dto/
│   │   │   │       └── ExamJeeApplication.java
│   │   │   │
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── static/
│   │   │
│   │   └── test/
│   │       └── java/
│   │
│   ├── pom.xml
│   └── README.md
│
├── frontend/
│   │
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   ├── models/
│   │   │   ├── app.component.ts
│   │   │   ├── app.config.ts
│   │   │   └── app.routes.ts
│   │   │
│   │   ├── assets/
│   │   ├── environments/
│   │   │   └── environment.ts
│   │   │
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.css
│   │
│   ├── angular.json
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   └── README.md
│
├── README.md
└── .gitignore
```
🔐 Sécurité et authentification

L’application utilise Spring Security avec une authentification stateless basée sur JSON Web Token - JWT.

Le mot de passe des utilisateurs est sécurisé avec BCrypt.

Fonctionnement général
L’utilisateur s’authentifie avec son username et son mot de passe.
Le backend vérifie les informations.
Si les informations sont valides, un token JWT est généré.
Le client utilise ce token pour accéder aux endpoints protégés.
Le backend vérifie le token à chaque requête.

👥 Matrice des rôles
Rôle	Capacités
ROLE_ADMIN	Accès total : gestion des agences, gestion des véhicules, gestion des utilisateurs et suppressions
ROLE_EMPLOYE	Gestion opérationnelle : ajout de véhicules, modification des informations et clôture des locations
ROLE_CLIENT	Consultation du catalogue, création de réservations et suivi de ses locations


🚀 Installation et lancement
1. Cloner le projet
git clone https://github.com/Agrigah/Exam-JEE.git
cd Exam-JEE
2. Lancer le backend Spring Boot
cd backend
mvn clean spring-boot:run

L’application démarre par défaut sur :

http://localhost:8085
