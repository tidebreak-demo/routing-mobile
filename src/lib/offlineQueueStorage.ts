import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "offline-queue";

export async function saveQueue(items: unknown[]): Promise<void> {
  await AsyncStorage.setItem(KEY, JSON.stringify(items));
}

export async function loadQueue(): Promise<unknown[]> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}
