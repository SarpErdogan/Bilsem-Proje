// src/ParentEditor.tsx
import React, { useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchParent, overwriteParentValue, subscribeParentRealtime } from "./api";
import { ParentNode } from "./types";
import { useInputStore } from "./store";

export default function ParentEditor() {
  const queryClient = useQueryClient();

  // React Query: parent verisini çek (initial fetch)
  const { data: parent, isLoading, isError, error } = useQuery<ParentNode>({
    queryKey: ["parent"],
    queryFn: fetchParent,
    // kısa süre sonra arkaplanda yenilemesini istemezsen staleTime ayarla
    staleTime: 1000 * 30,
  });

  // subscribe to realtime updates: cache'i güncelle (component mount/unmount)
  useEffect(() => {
    const unsubscribe = subscribeParentRealtime(queryClient);
    return () => unsubscribe();
  }, [queryClient]);

  // mutation: value overwrite
  const mutation = useMutation({
    mutationFn: (newValue: string) => overwriteParentValue(newValue),
    onSuccess: (_, newValue) => {
      // mutation başarılı olunca cache'i güncelle (isteğe bağlı; realtime zaten yapar)
      queryClient.setQueryData(["parent"], (old: any) => ({ ...(old ?? {}), value: newValue }));
      Alert.alert("Başarılı", "Değer güncellendi.");
      // store temizle
      useInputStore.getState().clear();
    },
    onError: (err: any) => {
      Alert.alert("Hata", err?.message ?? "Bilinmeyen hata");
    },
  });

  const inputValue = useInputStore((s) => s.inputValue);
  const setInputValue = useInputStore((s) => s.setInputValue);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text>Hata: {(error as Error).message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Parent Node (label)</Text>

      {/* Label: parent.value gösteriliyor. Eğer yoksa fallback */}
      <View style={styles.labelBox}>
        <Text style={styles.labelText}>{parent?.value ?? "(value yok)"}</Text>
      </View>

      {/* Alternatif: parent objesinin tamamını görmek istersen:
          <Text>{JSON.stringify(parent)}</Text>
      */}

      <Text style={styles.inputLabel}>Yeni değer (overwrite):</Text>
      <TextInput
        style={styles.input}
        placeholder="Yeni değeri yaz..."
        value={inputValue}
        onChangeText={setInputValue}
      />

      <View style={styles.buttons}>
        <Button
          title="Üzerine Yaz (Save)"
          onPress={() => {
            if (!inputValue || inputValue.trim() === "") {
              Alert.alert("Uyarı", "Boş değer gönderilemez.");
              return;
            }
            mutation.mutate(inputValue);
          }}
          disabled={mutation.isLoading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  labelBox: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    marginBottom: 12,
    backgroundColor: "#fafafa",
  },
  labelText: { fontSize: 16 },
  inputLabel: { marginBottom: 6, marginTop: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
    marginBottom: 12,
  },
  buttons: { marginTop: 8 },
});
