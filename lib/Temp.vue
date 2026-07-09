<template>
  <div ref="telegram" />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, shallowRef } from 'vue'

declare global {
  interface Window {
    onTelegramAuth?: (user: Record<string, unknown>) => void
  }
}

const props = defineProps({
  mode: {
    type: String,
    required: true,
    validator: (value: string) => ['callback', 'redirect'].includes(value),
  },
  telegramLogin: {
    type: String,
    required: true,
    validator: (value: string) => /bot$/i.test(value),
  },
  redirectUrl: {
    type: String,
    default: '',
  },
  requestAccess: {
    type: String,
    default: 'read',
    validator: (value: string) => ['read', 'write'].includes(value),
  },
  size: {
    type: String,
    default: 'large',
    validator: (value: string) => ['small', 'medium', 'large'].includes(value),
  },
  userpic: {
    type: Boolean,
    default: true,
  },
  radius: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['callback', 'loaded'])
const telegram = shallowRef<HTMLElement | null>(null)

let script: HTMLScriptElement | undefined

function onTelegramAuth(user: Record<string, unknown>) {
  emit('callback', user)
}

function createScript() {
  const element = document.createElement('script')

  element.async = true
  element.src = 'https://telegram.org/js/telegram-widget.js?22'
  element.dataset.size = props.size
  element.dataset.userpic = String(props.userpic)
  element.dataset.telegramLogin = props.telegramLogin
  element.dataset.requestAccess = props.requestAccess
  element.onload = () => emit('loaded')

  if (props.radius)
    element.dataset.radius = props.radius

  if (props.mode === 'callback') {
    window.onTelegramAuth = onTelegramAuth
    element.dataset.onauth = 'window.onTelegramAuth(user)'
  }
  else {
    element.dataset.authUrl = props.redirectUrl
  }

  return element
}

onMounted(() => {
  script = createScript()
  telegram.value?.appendChild(script)
})

onBeforeUnmount(() => {
  script?.remove()

  if (window.onTelegramAuth === onTelegramAuth)
    delete window.onTelegramAuth
})
</script>
