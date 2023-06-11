# TEKKI WEB SOLUTIONS ASSIGNMENT

- Submitted By: Gaurav Sahitya

## STEPS TO INSTALL APP AND ITS DEPENDANCIES

- Before running the below commands please create a file namely .env in the project root structure. For key-value pairs of .env please refer to the file named .env-sample.

```bash
npm i
npm run db:init
npm run db:migrate
npm run db:seed //optional command
```

## ENDPOINTS

- http://127.0.0.1:8083/register
- http://127.0.0.1:8083/login

- **Note**: Both the apis have same payload which is given below:-

```json
{
  "email": "value",
  "password": "value"
}
```

## COMMAND TO START THE APP

```bash
npm start
```
