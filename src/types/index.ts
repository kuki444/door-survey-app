export type DoorOption = {
  id: number;
  label: string;
};

export type SurveyQuestion = {
  question: string;
  options: DoorOption[];
};

export type SurveyResponse = {
  selectedDoor: DoorOption | null;
  nextQuestion: SurveyQuestion | null;
};