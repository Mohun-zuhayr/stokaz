import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, FlatList, TouchableOpacity, Text, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


interface Category {
  id: string;
  title: string;
}

// Example data for categories
const categories: Category[] = [
  { id: '1', title: 'Nature' },
  { id: '2', title: 'Technologies' },
  { id: '3', title: 'Art' },
  { id: '4', title: 'Travel' },
  { id: '5', title: 'Food' },
  { id: '6', title: 'Fashion' },
];

export default function TabThreeScreen() {
  const renderItem = ({ item }: { item: Category }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <ThemedText type="default" style={styles.categoryTitle}>
        {item.title}
      </ThemedText>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <View style={styles.rectangleContainer}>
        <TouchableOpacity style={styles.categoryItem}>
          <ThemedText type="default" style={styles.categoryTitle}>
            test
          </ThemedText>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
  },
  headerContainer: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subheaderText: {
    fontSize: 16,
    color: '#666',
  },
  rectangleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 20,
  },
  rectangleBox: {
    flex: 1,
    margin: 12,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  categoryItem: {
    flex: 1,
    margin: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  categoryTitle: {
    padding: 12,
    textAlign: 'center',
    fontSize: 16,
  },
});
