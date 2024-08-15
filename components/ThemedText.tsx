import { Text, type TextProps, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';


export type ThemedTextProps = TextProps & {
  color?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  color,
  type = 'default',
  ...rest
}: ThemedTextProps) {


  return (
    <Text
      style={[
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 19.6,
    letterSpacing:0.2,
    fontFamily:'Poppins-Light'
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily:'Poppins-SemiBold',
    color:Colors.light.green
  },
  title: {
    fontSize: 26,
    fontFamily:'Poppins-SemiBold',
    lineHeight: 47,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
