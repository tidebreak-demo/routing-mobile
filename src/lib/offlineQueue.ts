type QueuedAction = { id: string; path: string; body: unknown; queuedAt: string }

const queue: QueuedAction[] = []

export function enqueue(action: QueuedAction) {
  queue.push(action)
}

export async function flush() {
  while (queue.length > 0) {
    const action = queue.shift()!
    await api.post(action.path, action.body)
  }
}
