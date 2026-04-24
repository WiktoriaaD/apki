
export type RootStackParamList = {
   Home: undefined;
   Details: { 
    id: number;
    title: string; 
    speaker: string;
    description:string
    location: string;
    hour: string;
    category: string;
   };
};