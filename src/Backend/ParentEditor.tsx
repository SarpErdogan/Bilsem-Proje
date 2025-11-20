// src/ParentEditor.tsx
import React, { useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchParent, overwriteParentValue, subscribeParentRealtime, addItem } from "./api";
import { ParentNode } from "./types";
import { useInputStore, useTextStore } from "../store/store";

export default function ParentEditor() {
  const queryClient = useQueryClient();
  const text = useTextStore((s) => s.text);
  const setText = useTextStore((s) => s.setText);

  const mutation = useMutation({
    mutationFn: addItem, // api.ts içindeki addItem fonksiyonunu kullanıyoruz
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["parent"] }); // listeyi yenile
      Alert.alert("Başarılı", "Yeni veri eklendi!");
      setText(""); // input'u temizle
    },
    onError: (err: any) => {
      Alert.alert("Hata", err?.message ?? "Bilinmeyen hata");
    },
  });

  const handleAdd = () => {
    if (!text.trim()) {
      Alert.alert("Uyarı", "Lütfen bir değer gir.");
      return;
    }
    mutation.mutate(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yeni veri ekle:</Text>

      <TextInput
        style={styles.input}
        placeholder="Yeni değer gir..."
        value={text}
        onChangeText={setText}
      />

      <Button
        title={mutation.isPending ? "Ekleniyor..." : "Ekle"}
        onPress={handleAdd}
        disabled={mutation.isPending}
      />
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
