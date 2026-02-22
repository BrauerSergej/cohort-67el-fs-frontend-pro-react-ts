export interface FeedbackProps {
    like: number;
    disLike: number;
    onLike: () => void;
    onDisLike: () => void;
    resetResults: () => void;
}