import { flush } from "./offlineQueue"

export function onReconnect() {
  return flush().catch(() => {
    setTimeout(onReconnect, 5000)
  })
}
