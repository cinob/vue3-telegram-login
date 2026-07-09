# Vue3 Telegram Login

Vue 3 component for Telegram Login Widget (`telegram-widget.js?22`).

## Installation

```bash
pnpm add vue3-telegram-login
```

## Usage

### Callback mode

```vue
<script setup>
import { telegramLoginTemp } from 'vue3-telegram-login'

function handleCallback(user) {
  console.log(user)
}
</script>

<template>
  <telegram-login-temp
    mode="callback"
    telegram-login="YourTelegramBot"
    @callback="handleCallback"
  />
</template>
```

### Redirect mode

```vue
<script setup>
import { telegramLoginTemp } from 'vue3-telegram-login'
</script>

<template>
  <telegram-login-temp
    mode="redirect"
    telegram-login="YourTelegramBot"
    redirect-url="https://your-domain.com/auth/telegram/callback"
  />
</template>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `mode` | `'callback' \| 'redirect'` | - | Login mode. |
| `telegramLogin` | `string` | - | Telegram bot username, must end with `bot`. |
| `redirectUrl` | `string` | `''` | Redirect URL for redirect mode. |
| `requestAccess` | `'read' \| 'write'` | `'read'` | Use `write` to request permission to send messages. |
| `size` | `'small' \| 'medium' \| 'large'` | `'large'` | Button size. |
| `userpic` | `boolean` | `true` | Show user photo. |
| `radius` | `string` | `''` | Button corner radius. |

## Events

| Event | Description |
| --- | --- |
| `loaded` | Telegram widget script loaded. |
| `callback` | Login success callback, only for callback mode. |

## Notes

- Set your bot domain with [@BotFather](https://t.me/botfather) using `/setdomain`.
- Always verify the received payload on your server. See [Checking authorization](https://core.telegram.org/widgets/login#checking-authorization).
- This package wraps the legacy Telegram Login Widget. New OAuth-style flows require a different integration.
