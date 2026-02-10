import { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Accordion, FAQItem } from '@/components/ui/accordion';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { supabase } from '@/lib/supabase';

export default function HomeScreen() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();

  useEffect(() => {
    async function fetchFaqs() {
      try {
        setLoading(true);
        const { data, error: fetchError } = await supabase
          .from('faqs')
          .select('*')
          .order('created_at', { ascending: false });

        if (fetchError) throw fetchError;
        setFaqs(data || []);
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setError('Kunne ikke hente FAQ. Prøv igen senere.');
      } finally {
        setLoading(false);
      }
    }

    fetchFaqs();
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
            <ActivityIndicator size="large" color={theme.text} style={styles.loader} />
          ) : error ? (
            <ThemedText style={styles.errorText}>{error}</ThemedText>
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
  loader: {
    marginTop: Spacing.four,
  },
  errorText: {
    color: '#ff4444',
    textAlign: 'center',
    marginTop: Spacing.four,
  },
});
