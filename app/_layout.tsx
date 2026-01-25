import AuthProvider from "@/providers/auth-provider";
import QueryProvider from "@/providers/query-provider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <QueryProvider>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(shop)" options={{ headerShown: false }} />;
          <Stack.Screen name="categories" options={{ headerShown: false }} />;
          <Stack.Screen name="product" options={{ headerShown: false }} />;
          <Stack.Screen name="cart" options={{ headerShown: true }} />;
          <Stack.Screen name="auth" options={{ headerShown: false }} />;
        </Stack>
      </AuthProvider>
    </QueryProvider>
  );
}
