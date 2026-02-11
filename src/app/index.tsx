import { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Accordion, FAQItem } from '@/components/ui/accordion';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { FaqService } from '@/services/faq.service';

export default function HomeScreen() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFaqs() {
      try {
        const data = await FaqService.getFaqs();
        setFaqs(data);
      } catch (error) {
        console.error('Failed to load FAQs:', error);
      } finally {
        setLoading(false);
      }
    }
    loadFaqs();
  }, []);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.header}>
          <ThemedText type="title" style={styles.brandName}>
            diaBrave
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.content}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            FAQ
          </ThemedText>
          {loading ? (
            <ThemedView style={styles.center}>
              <ActivityIndicator size="large" />
            </ThemedView>
          ) : (
            <Accordion items={faqs} />
          )}
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
    paddingBottom: BottomTabInset + Spacing.three,
  },
  header: {
    paddingVertical: Spacing.six,
    alignItems: 'center',
  },
  brandName: {
    textAlign: 'center',
  },
  content: {
    flex: 1,
    gap: Spacing.four,
  },
  sectionTitle: {
    marginBottom: Spacing.two,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
