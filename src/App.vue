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
function yourCallbackFunction (user) {
  // gets user as an input
  // id, first_name, last_name, username,
  // photo_url, auth_date and hash
  console.log(user)
}
</script>

