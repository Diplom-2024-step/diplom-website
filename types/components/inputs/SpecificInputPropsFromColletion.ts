interface SpecificInputPropsFromColletion {
  onChange: (value: string) => void;
  currectValue: any;
  items: any[];
  propertyName?: string;
  placeHolder?: string;
}

export default interface SpecificInputFromColletion
  extends React.FC<SpecificInputPropsFromColletion> {}
