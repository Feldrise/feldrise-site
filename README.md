# Feldrise's website
My cool portfolio 😎
## Initial setup
There are two modes of startup, the `production` and `development`.
By default, it is set on development but is started as production for `npm run start`.
You can configure this as your guise like the following in your `env.local` file:
```properties
NODE_ENV=production|development
```
## Mailing
### Installation
Make sure to configure your `.env.local` correctly like below
```properties
MAIL_HOST=smtp.gmail.com
MAIL_PORT=435
MAIL_SECURE=true|false
MAIL_USER=senderEmail@gmail.com
MAIL_PASS=senderReallySecuredPassword
MAIL_RECEIVER=receiverEmail@gmail.com
NEXT_PUBLIC_CAPTCHA_SITE=yourGoogleSiteKey
CAPTCHA_SECRET=yourGoogleSecretKey
```
> Get your google captcha keys from http://www.google.com/recaptcha/admin