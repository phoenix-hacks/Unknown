export type RootStackParamList = {
  HomeScreen: undefined;
  GridScreen: undefined;
  QuestionScreen: {
    question: string;
    correctAnswer: string;
    blockId: string;
    onAnswered: (blockId: string) => void;
  };
  CompletionScreen: undefined;
};
