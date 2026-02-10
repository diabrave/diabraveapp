import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  created_at: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    question: 'Hvad er diaBrave?',
    answer: 'diaBrave er et værktøj skabt til at hjælpe børn med diabetes og deres omsorgspersoner.',
    created_at: new Date().toISOString(),
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    question: 'Hvad er Relay-mode?',
    answer: 'En funktion der gør det sikkert og nemt at overlevere ansvar til f.eks. skole eller pædagoger.',
    created_at: new Date().toISOString(),
  },
];

export function Accordion({ items }: { items: FAQItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const theme = useTheme();

  return (
    <ThemedView style={styles.container}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <ThemedView key={item.id} style={styles.itemContainer}>
            <Pressable
              style={({ pressed }) => [styles.header, pressed && styles.pressed]}
              onPress={() => setOpenId(isOpen ? null : item.id)}>
              <ThemedText style={styles.question}>{item.question}</ThemedText>
              <ThemedView type="backgroundElement" style={styles.iconContainer}>
                <SymbolView
                  name={{ ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' }}
                  size={14}
                  weight="bold"
                  tintColor={theme.text}
                  style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
                />
              </ThemedView>
            </Pressable>
            {isOpen && (
              <Animated.View entering={FadeIn.duration(200)}>
                <ThemedView type="backgroundElement" style={styles.content}>
                  <ThemedText>{item.answer}</ThemedText>
                </ThemedView>
              </Animated.View>
            )}
          </ThemedView>
        );
      })}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: Spacing.two,
  },
  itemContainer: {
    paddingVertical: Spacing.two,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.two,
  },
  pressed: {
    opacity: 0.7,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  iconContainer: {
    width: Spacing.four,
    height: Spacing.four,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Spacing.two,
  },
  content: {
    marginTop: Spacing.two,
    padding: Spacing.three,
    borderRadius: Spacing.two,
  },
});
