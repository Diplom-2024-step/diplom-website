import OnChangeFunctionProps from "./OnChangeFunctionProps";

interface SpecificInputProps {
  onChange: OnChangeFunctionProps;
  currectValue: any;
  propertyName?: string;
  placeHolder?: string;

}

export default interface SpecificInput extends React.FC<SpecificInputProps> {}

