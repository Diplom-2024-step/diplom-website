import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Input} from '@nextui-org/react';
import  '../../assets/fonts-styles/font.css';
import NumberInput from './sharedComponents/NumberInput';

interface TravelerCardProps {
  adults: number;
  children: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
  onSave: () => void;
  onClose: () => void;
}

const TravelerCard: React.FC<TravelerCardProps> = ({ adults, children, setAdults, setChildren, onSave, onClose }) => {
  const handleAdultChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1); // Минимум 1 взрослый
    setAdults(value);
  };

  const handleChildrenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseInt(e.target.value) || 0); // Минимум 0 детей
    setChildren(value);
  };

  return (
    <div 
      className="absolute -left-5 top-20 z-60 w-full"
      style={{ minWidth: '300px', maxWidth: '500px' }} 
    >
      <Card shadow="md" radius="lg" className=" w-full mx-auto bg-white text-[#171717]">
        <CardHeader className="flex justify-left items-left">
          <h3 
          style={{fontFamily: 'Unbounded, sans-serif' }}
          className="text-md font-semibold pl-3 pt-2">Мандрівники</h3>
        </CardHeader>
        
        <CardBody className="flex flex-row space-y-4 shadow-lg p-5">
          <div className="flex justify-between space-x-3">
            <NumberInput
               value={adults} 
               setValue={setAdults}              
               min={1}
               max={6}
               label='Дорослих'
              />

            <NumberInput
               value={children} 
               setValue={setChildren}              
               min={0}
               max={6}
               label='Дітей'
              />
         
          </div>
        </CardBody>
        
      </Card>
    </div>
  );
};

export default TravelerCard;
