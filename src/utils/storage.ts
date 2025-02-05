type StorageKey = 'auth'

export const storage = {
  get: ({ key }: { key: StorageKey }) => {
    const value = localStorage.getItem(key)
    if (!value) {
      return null
    }
    return value
  },
  set: ({ key, value }: { key: StorageKey; value: string }) => {
    localStorage.setItem(key, value)
  },
  remove: ({ key }: { key: StorageKey }) => {
    localStorage.removeItem(key)
  },
  clear: () => {
    localStorage.clear()
  }
}
