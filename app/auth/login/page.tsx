"use client"; 
import { signIn } from "next-auth/react"; 
import { useRouter } from "next/navigation"; 
import React, { useState } from "react"; 
import { Checkbox, Button, Input, Spacer } from "@nextui-org/react"; 
import Image from 'next/image';
import loginFormImage from '../../../assets/images/loginForm/image-1.png';
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import '../fonts-styles/font.css'

type Provider = 'google' | 'apple' | 'facebook';

const getProviderIconId = (provider: Provider): number => {
  const icons: Record<Provider, number> = {
    google: 32839,
    apple: 95294,
    facebook: 98972,
  };
  return icons[provider];
};

const LoginPage = () => { 
  const route = useRouter(); 
  const [isLoading, setIsLoading] = useState(false); 
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState(""); 
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = (email: string): boolean => {
    // regex для проверки формата email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password: string): boolean => {
    return password.length > 0; // пароль не должен быть пустым
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setEmailError('Email не может быть пустым');
    } else if (!validateEmail(value)) {
      setEmailError('Введите корректный email');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (!validatePassword(value)) {
      setPasswordError('Пароль не може бути пустим');
    } else {
      setPasswordError('');
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setIsLoading(true); 

    let hasError = false;

    if (emailError || passwordError) {
      hasError = true;
    }

    if (hasError) {
      setIsLoading(false);
      return; // Если есть ошибка, не продолжать выполнение входа
    }

    const result = await signIn("credentials", { 
      email, 
      password, 
      callbackUrl: "/", 
      redirect: false 
    }); 

    if (result?.status !== 200) { 
      setErrorMessage("Неверные учетные данные. Попробуйте еще раз."); 
    } else { 
      route.push("/"); 
    } 
    
    setIsLoading(false); 
  };

  const providers: Provider[] = ['google', 'apple', 'facebook'];

  return (
    <div className="flex justify-center items-center min-h-screen relative p-4 md:p-0">
      
      <button className="absolute top-5 left-1 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg mb-3
        transition-all duration-300 hover:shadow-xl transform hover:scale-105">
        <div className="flex items-center justify-center">
          <img 
            src="https://img.icons8.com/?size=100&id=39776&format=png&color=1A1A1A" 
            alt="left-arrow"
            className="w-7 h-7"
          />
        </div>
      </button>
  
      <div className="flex flex-col md:flex-row w-full md:w-[1000px] bg-white rounded-[20px] shadow-lg p-4 md:p-4 mt-6">
        
        {/* Левый блок с формой */}
        <div className="mt-5 w-full md:w-2/5 p-5 flex flex-col">
          <h2
            style={{fontFamily: 'Unbounded, sans-serif' }}
            className="text-center text-[#0F171B] text-1xl md:text-2xl mb-4 font-bold">Вхід у систему</h2>
          <Spacer />
  
          <div className="flex justify-center items-center mb-7 flex-wrap">
            {providers.map((provider) => (
              <Button
                key={provider}
                className="bg-gradient-to-r from-[#5DB3C1] to-[#99D8DE] rounded-full transition duration-300 mx-1 w-[40px] text-white"
                onClick={() => signIn(provider)}
              >
                <img 
                  className={`w-7 h-7 ${provider.charAt(0)}-icon`} 
                  src={`https://img.icons8.com/?size=100&id=${getProviderIconId(provider)}&format=png&color=FFFFFF`} 
                  alt={`${provider}-icon`}
                />
              </Button>
            ))}
          </div>
  
          <Spacer />
          
          <form onSubmit={onSubmit}>
            <Input
              radius="full"
              type="email"
              variant="bordered"
              placeholder="Email або ім'я користувача" 
              value={email} 
              onChange={handleEmailChange}
              classNames={{
                inputWrapper: "border-2 border-[#424242] hover:border-[#424242] focus:border-[#424242] border-opacity-100",
                input: "text-[#171717]"
              }}
              className="mb-4"
              isInvalid={!!emailError}  // true, если есть ошибка
              errorMessage={emailError} // Отображаем сообщение об ошибке
            />
            <Spacer />
            <Input
              radius="full"
              placeholder="Пароль" 
              variant="bordered"
              value={password}
              endContent={
                <button 
                  className="focus:outline-none" 
                  type="button" 
                  onClick={toggleVisibility} 
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              classNames={{
                inputWrapper: "border-2 border-[#424242] hover:border-[#424242] focus:border-[#424242] border-opacity-100",
                input: "text-[#171717]"
              }}
              className="mb-1"
              onChange={handlePasswordChange} // обработчик изменения
              isInvalid={!!passwordError} // true, если есть ошибка
              errorMessage={passwordError} // Отображаем сообщение об ошибке
            />
            <Spacer />
            
            <Checkbox
              classNames={{
                wrapper: "border-[#303030]"
              }}
              className="mt-1" radius="sm" color="default">
              <p className="text-[#303030] font-semibold text-xs">запам’ятати мене</p>
            </Checkbox>
  
            <Spacer />
            <div className="flex justify-center text-center mt-5 mb-2">
              <Button className="w-1/2 rounded-full text-white bg-[#5DB3C1] font-light" type="submit" disabled={isLoading}>
                {isLoading ? 'Завантаження...' : 'Вхід'}
              </Button>
            </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>

        <Spacer />
          <div className="flex justify-center gap-4 text-[#0F171B] text-xs font-semibold">
            <a href="/auth/forgot-password">Забули пароль?</a>
            <a href="/auth/registrate">Реєстрація</a>
          </div>
        </div>

      {/* Правый блок с изображением */}
      <div className="relative flex-1 overflow-hidden md:ml-8">
        <Image src={loginFormImage} alt="Login Image" layout="fill" objectFit="cover" className="rounded-[20px]" />
      </div>
    </div>
  </div>
);

  
};

export default LoginPage;
