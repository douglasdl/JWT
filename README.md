# JWT

JSON Web Token

## Opening

## JWT

- Composition: Header . Payload . Verify Signature

## [JWT.io](https://jwt.io/)

### [Example](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzNDU2In0.8rRtfDYtQol1EuAUzmRR6lfiPm-bCD2vIteqFdz1hZU):

Encoded:
```json
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzNDU2In0.8rRtfDYtQol1EuAUzmRR6lfiPm-bCD2vIteqFdz1hZU
```

Decoded:

- HEADER: ALGORITHM & TOKEN TYPE
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

- PAYLOAD: DATA
```json
{
  "user_id": "123456"
}
```

- VERIFY SIGNATURE
```js
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  rodrigo
)
```


## Authentication and Authorization

- Authentication: who are you?
- Authorization: what can you do? (permission)

## The project that we will use

Install the dependencies:
```sh
npm i
```

Start the server:
```sh
npm run dev
```

## Using Environment Variable

- [MD5 Hash Generator](https://www.md5hashgenerator.com/)

## JSON Web Token

Install the dependencies:
```sh
npm i jsonwebtoken@9.0.2
npm i @types/jsonwebtoken@9.0.6 -D
```

## Session Creation

## Extract the Token

## Authentication Middleware

## Define User Role

## Automatic Token Update

## Authorization Middleware

<<<<<<< HEAD
### Ending
=======
## Ending
>>>>>>> 8ceece2 (feat: add user role)
