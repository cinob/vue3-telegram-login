## Vue3 Telegram Login

Base on [vue-telegram-login](https://github.com/vchaptsev/vue-telegram-login), thanks [@vchaptsev](https://github.com/vchaptsev)


## Installation

Install with [yarn](https://yarnpkg.com):

  ```bash
  $ yarn add vue3-telegram-login
  ```

Install with [npm](https://npmjs.com):

  ```bash
  $ npm i vue3-telegram-login --save
  ```
 
## Usage

Import `telegram-login-temp`, pass it to the `components` and use in your template

```html
<template>
  <!-- Callback mode -->
  <telegram-login-temp
    mode="callback"
    telegram-login="YourTelegramBot"
    @callback="yourCallbackFunction"
  />

  <!-- Redirect mode -->
  <telegram-login-temp
    mode="redirect"
    telegram-login="YourTelegramBot"
    redirect-url="https://your-website.io"
  />
</template>

<script setup>
import { telegramLoginTemp } from 'vue3-telegram-login'
function yourCallbackFunction (user) {
  // gets user as an input
  // id, first_name, last_name, username,
  // photo_url, auth_date and hash
  console.log(user)
}
</script>
```


## Props
You can play around with options on the official [widget page](https://core.telegram.org/widgets/login#widget-configuration)

| Name          | Description                                                                   | Required | Default     |
| ------------- | ----------------------------------------------------------------------------- | -------- | ----------- |
| mode          | 'callback' or 'redirect'                                                      | True     | null        |
| telegramLogin | Your telegram bot name                                                        | True     | null        |
| @callback     | Your callback function, it will be called after success if mode is 'callback' | False    | true        |
| redirectUrl   | Your redirect URL, user will be redirected if mode is 'redirect'              | False    | null        |
| requestAccess | 'write' if you want to get access to send messages from your bot              | False    | 'read'      |
| size          | 'large', 'medium' or 'small'                                                  | False    | 'large'     |
| userpic       | Show user photo, true or false                                                | False    | true        |
| radius        | Button corner radius (default depends on chosen size)                         | False    | 20\14\10    |


## Notes
1. You need to set domain to your bot if you want to user Telagram Login (`/setdomain` command to [@BotFather](https://t.me/botfather))
2. You need to verify the authentication and the integrity of the data received by comparing the received hash parameter with the hexadecimal representation of the HMAC-SHA-256 signature of the data-check-string with the SHA256 hash of the bot's token used as a secret key ([source](https://core.telegram.org/widgets/login#checking-authorization)).<br>
You can find some code samples [on this page](https://gist.github.com/anonymous/6516521b1fb3b464534fbc30ea3573c2).
3. Don't disable third party cookies if you want to use Telegram Login as a User (thanks [@robverhoef](https://github.com/robverhoef))
