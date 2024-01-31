# Co'waf

Application de mise en relation de propriétaires et associations d'animaux pour du covoiturage.

Un projet PWA développé avec Vue.js, Symfony API, Docker et MySQL.

# Clonez le projet depuis GitHub :

   ```bash
   git clone https://github.com/Joris07/cowaf.git
   ```

## Travailler en local

## Prérequis

- Node.js et npm
- Vue CLI

1. Installation des dépendances
    ```bash
    cd cowaf

    npm install

    npm run serv
    ```
    
2 . Attention !
    - Changer le port vers l'API cowaf lors d'appels FETCH par exemple
    - L'api tourne peut-être sur le même port que le FRONT
## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## Travail avec Docker

## Prérequis

- Docker
- Docker Compose

## Installation

1. Installation composer :
    - Il faut changer le token dans le Dockerfile symfony et vue

    ```bash
    cd cowaf/docker

    docker-compose up --build
    ```

2. Accès à l'Application :
    - L'application Vue.js est accessible à l'URL : http://localhost:40110
    - L'API Symfony est accessible à l'URL : http://localhost:40111
    - PhpMyAdmin est accessible à l'URL : http://localhost:40113

3. Identifiants de Connexion :

    1. PhpMyAdmin :
        - URL : http://localhost:40113
        - Server : mysql-db
        - Utilisateur : cowafUser
        - Mot de Passe : w8yh9QLt5ibbcTN6xBXaj1