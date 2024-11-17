export type RootStackParamList = {
  SignInScreen: undefined;
  HomeScreen: undefined;
  GridScreen: undefined;
  CompletionScreen: undefined;
  QuestionScreen: {
    question: string;
    location: { latitude: number; longitude: number };
    blockId: string;
    onAnswered: (blockId: string) => void;
  };
};
