import { SymbolView } from 'expo-symbols';
import { ReactNode, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <ThemedView style={styles.container}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </ThemedView>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const theme = useTheme();

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: withTiming(isOpen ? '-90deg' : '90deg') }],
    };
  });

  return (
    <ThemedView style={styles.item}>
      <Pressable
        style={({ pressed }) => [styles.heading, pressed && styles.pressedHeading]}
        onPress={onToggle}
        accessibilityRole="button"
        accessibilityState={{ expanded: isOpen }}
        accessibilityLabel={item.title}>
        <ThemedText type="smallBold" style={styles.question}>
          {item.title}
        </ThemedText>
        <ThemedView type="backgroundElement" style={styles.button}>
          <Animated.View style={animatedIconStyle}>
            <SymbolView
              name={{ ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' }}
              size={14}
              weight="bold"
              tintColor={theme.text}
            />
          </Animated.View>
        </ThemedView>
      </Pressable>
      {isOpen && (
        <Animated.View
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(200)}
          layout={LinearTransition}>
          <ThemedView type="backgroundElement" style={styles.content}>
            {typeof item.content === 'string' ? (
              <ThemedText type="small">{item.content}</ThemedText>
            ) : (
              item.content
            )}
          </ThemedView>
        </Animated.View>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.two,
    alignSelf: 'stretch',
    marginTop: Spacing.four,
  },
  item: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingVertical: Spacing.two,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.two,
  },
  pressedHeading: {
    opacity: 0.7,
  },
  question: {
    flex: 1,
    paddingRight: Spacing.two,
  },
  button: {
    width: Spacing.four,
    height: Spacing.four,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginTop: Spacing.two,
    borderRadius: Spacing.two,
    padding: Spacing.three,
  },
});
