import { PRODUCTS } from "@/assets/products";
import { ListHeader } from "@/components/list-header";
import { ProductListItem } from "@/components/product-list-item";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
  console.log(data);

  return (
    <View>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(key) => key.id.toString()}
        numColumns={2}
        ListHeaderComponent={<ListHeader />}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: "space-between",
  },
});
