// This interface is to be used for all child elements that
// are within the Layout.tsx file. First we set a number PROPERTY
// and a function property to be used in the layout.

export interface MyContextType{
    number: number;
    increment: () => void;
    totalMGP: (value: number) => void;
    // (value: number): void;
}