export type ListItemProps = {
    title: string;
    category: string;
    description: string;
    location?: string;
    onPress?: () => void;
    hour?: string;
    speaker?: string;
}