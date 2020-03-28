<h1 align="center">
    Be The Hero
</h1>

## :bulb: Project idea

*Be The Hero* was made by the idea of linking Heroes with ONGs based on incidents.

## :gear: Technologies

Project Application made with:

- [Node.js](https://nodejs.org/en/)
    - [Express.js](https://expressjs.com/)
    - [Knex.js](http://knexjs.org/) <em>+ SQLite 3</em>
    - [Axios](https://github.com/axios/axios#readme)
    - [Celebrate](https://github.com/arb/celebrate#readme)
    - [Jest](https://jestjs.io/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

<br>

## :runner::dash: Running the project

The Web part is divided into **Backend** and **Frontend**.

### Backend

To initialize the **Backend** part:
```bash
cd backend
yarn install
yarn start
```
If you want to **assert tests**:
```bash
yarn test
```
You can make requests using [*Postman*](https://www.postman.com/) or [*Insomnia*](https://insomnia.rest/) at `https://localhost:3333`

---

### Frontend

To initialize the **Frontend** part:
```bash
cd frontend
yarn install
yarn start
```
You can now access the application via `https://localhost:3000`

---

### Mobile

To initialize in **Smartphones**:
```bash
# If you already have Expo (CLI) installed, skip the command below!
yarn global add install expo-cli
cd mobile
yarn install
```

Alter the `baseURL` at `src/services/api.js` using your IPv4:
```
https://YOUR_IPV4:3333
```

Execute **Expo**:
```bash
expo start
```

You're going to be redirected to the ***Expo Dashboard*** in your default browser. Choose `LAN` mode and scan the given QR Code with the ***Expo App*** scan function.

- App on [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)
- App on [iOS](https://itunes.apple.com/app/apple-store/id982107779)

