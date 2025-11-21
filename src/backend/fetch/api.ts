// src/api.ts
import  db  from "./firebase";
import { ref, get, child, set, onValue, off, push  } from "firebase/database";
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

export const addItem = async (text: string) => {
  const parentRef = ref(db, "parent/items");
  await push(parentRef, { value: text });
};


