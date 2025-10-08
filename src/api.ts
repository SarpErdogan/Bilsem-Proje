// src/api.ts
import  db  from "./firebase";
import { ref, get, child, set, onValue, off } from "firebase/database";
import { ParentNode } from "./types";
import { QueryClient } from "@tanstack/react-query";

/**
 * Tek seferlik fetch (get)
 */
export async function fetchParent(): Promise<ParentNode> {
  const dbRef = ref(db);
  const snap = await get(child(dbRef, "parent"));
  if (snap.exists()) {
    return snap.val() as ParentNode;
  }
  return {};
}

/**
 * Overwrite: parent/value alanını set eder.
 * İstersen tüm parent objesini de set edebilirsin (set(ref(db,'parent'), obj)).
 */
export async function overwriteParentValue(newValue: string): Promise<void> {
  const parentValueRef = ref(db, "parent/value");
  // set doğrudan overwrite yapar
  await set(parentValueRef, newValue);
}

/**
 * Realtime listener: parent node değişince QueryClient'ın cache'ini günceller.
 * - queryKey: ['parent']
 * - returns unsubscribe fonksiyonu
 */
export function subscribeParentRealtime(queryClient: QueryClient) {
  const parentRef = ref(db, "parent");

  const callback = (snapshot: any) => {
    const val = snapshot.exists() ? snapshot.val() : {};
    // Cache'i set et (React Query kullanıyorsan)
    queryClient.setQueryData(["parent"], val);
  };

  onValue(parentRef, callback);

  // dönülen fonksiyonu çağırınca dinlemeyi kaldırsın
  return () => {
    off(parentRef, (callback as any));
  };
}
