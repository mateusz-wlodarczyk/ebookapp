export type ButtonCategoryProps = {
    handleClickButton: (id: number) => void;
    text: string;
    id: number;
  };

export type Category = {id:number;category_name:string}

export type InputCategoryProps = {
    handleInputChange: (id: number, value: string) => void;
    inputValues: Record<number, string>;
    el: Category;
    placeholder: string;
    type: string;
  }; 

export type LabelCategoryProps = {
    text: string;
    el: Category;
  };