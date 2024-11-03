"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import axios from "axios";
import { useAuth } from "@/hooks/auth";
import { Checkbox, Button, Input, Spacer } from "@nextui-org/react"; 
import Image from 'next/image';
import loginFormImage from '../../../assets/images/loginForm/image-1.png';
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

const RegisterPage = () => {
  const route = useRouter();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPasswordError, setShowConfirmPasswordError] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const { status } = useAuth({ redirect: true });

  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // Errors
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
 

  const validateEmail = (email: string): boolean => {
    // regex для проверки формата email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateAllFields = (): boolean => {
    return (
      email.trim() !== '' &&
      username.trim() !== '' &&
      password.trim() !== '' &&
      confirmPassword.trim() !== '' &&
      firstName.trim() !== '' &&
      lastName.trim() !== ''
    ); 
  };

  const validatePassword = (password: string): boolean => {
    return password.length > 0; // пароль не должен быть пустым
  };

  const validateConfirmPassword = (confirmPassword: string): boolean => {
    return confirmPassword.length > 0; // подтверждение пароля не должно быть пустым
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

    // Проверка после ввода пароля
    if (confirmPassword && value !== confirmPassword) {
      setShowConfirmPasswordError(true);
    } else {
      setShowConfirmPasswordError(false);
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (!validateConfirmPassword(value)) {
      setShowConfirmPasswordError(true);
    } else if (value !== password) {
      setShowConfirmPasswordError(true);
    } else {
      setShowConfirmPasswordError(false);
    }
  };

  const validateName = (name: string): boolean => {
    const nameRegex = /^[A-Za-zА-Яа-яЁё]+$/; // выражение для проверки, что имя содержит только буквы
    return name.trim() !== '' && nameRegex.test(name);
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFirstName(value);
      setFirstNameTouched(true);

      // Проверка на заполненность и корректность имени
      if (!validateName(value)) {
          setError('Ім\'я може містити лише букви');
      } else {
          setError('');
      }
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setLastName(value);
      setLastNameTouched(true);

      // Проверка на заполненность и корректность фамилии
      if (!validateName(value)) {
          setError('Прізвище може містити лише букви');
      } else {
          setError('');
      }
  };


  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();

    if (!validateAllFields()) {
      setError("Пожалуйста, заполните все поля");
      setIsLoading(false);
      return;
    }

    // Проверка на совпадение паролей перед отправкой
    if (password !== confirmPassword || !validateConfirmPassword(confirmPassword)) {
      setShowConfirmPasswordError(true);
      setIsLoading(false);
      return;
    }

    const username = `${firstName} ${lastName}`.trim();

    try {
      const result = await axios.post("/api/registrate", {
        email,
        password,
        username,
        role: "Admin"
      });
      if (result.status !== 200) {
        setError("Failed to register");
      } else {
        const signInResult = await signIn("credentials", {
          email,
          password,
          callbackUrl: "/",
          redirect: false
        });
        if (signInResult?.error) {
          setError("Failed to login");
        } else {
          route.push("/");
        }
      }
    } catch (e) {
      const error = e as Error;
      setError(error.message);
    }
    setIsLoading(false);
  };

  const providers: Provider[] = ['google', 'apple', 'facebook'];

  return (
      <div className="flex justify-center items-center min-h-screen relative p-4 md:p-0">
        
      <button onClick={() => history.back()} className="absolute top-7 left-1 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg mb-1
        hover:shadow-xl transform hover:scale-105">
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
        <div className="w-full md:w-2/5 p-3 flex flex-col">
          <h2 
            style={{fontFamily: 'Unbounded, sans-serif' }}
            className="text-center text-[#0F171B] text-xl md:text-2xl mb-4 font-bold">Персональні дані</h2>
          <Spacer />

          <div className="flex justify-center items-center mb-7 flex-wrap">
            {providers.map((provider) => (
              <Button
                key={provider}
                className="bg-gradient-to-r from-[#5DB3C1] to-[#99D8DE] rounded-full transition duration-300 mx-1 w-[40px] text-white"
                onClick={() => signIn(provider)}
              >
                <img 
                  className={`w-7 h-7  ${provider.charAt(0)}-icon`} 
                  src={`https://img.icons8.com/?size=100&id=${getProviderIconId(provider)}&format=png&color=FFFFFF`} 
                  alt={`${provider}-icon`} 
                />
              </Button>
            ))}
          </div>

          <Spacer />
          
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col pl-4 max-w-xs space-y-2">
              <Input
                radius="full"
                type="email"
                variant="bordered"
                placeholder="Електронна адреса" 
                value={email} 
                onChange={handleEmailChange}
                classNames={{
                  inputWrapper: "border-2 border-[#424242] hover:border-[#424242] focus:border-[#424242] border-opacity-100",
                  input: "text-[#171717]"
                }}
                className="bg-transparent" 
                isInvalid={!!emailError}  // true, если есть ошибка
                errorMessage={emailError} // Отображаем сообщение об ошибке
              />
              <Spacer />
              <Input
                radius="full"
                placeholder="Пароль" 
                variant="bordered"
                value={password}
                classNames={{
                  inputWrapper: "border-2 border-[#424242] hover:border-[#424242] focus:border-[#424242] border-opacity-100",
                  input: "text-[#171717]"
                }}
                className=" bg-transparent]"
                onChange={handlePasswordChange} // обработчик изменения
                isInvalid={!!passwordError || showConfirmPasswordError}
                errorMessage={passwordError || (showConfirmPasswordError ? 'Паролі не співпадають' : '')}
              />
              <Spacer />
              <Input
                radius="full"
                placeholder="Підтвердження пароля" 
                variant="bordered"
                value={confirmPassword}
                classNames={{
                  inputWrapper: "border-2 border-[#424242] hover:border-[#424242] focus:border-[#424242] border-opacity-100",
                  input: "text-[#171717]"
                }}
                className=" bg-transparent text-[#30303080]"
                onChange={handleConfirmPasswordChange} // обработчик изменения
                isInvalid={showConfirmPasswordError}
                errorMessage={showConfirmPasswordError ? 'Паролі не співпадають' : ''}
              />
              <Spacer />
                <div className="flex">
                  <Input
                    radius="full"
                    placeholder="Ім’я"
                    variant="bordered"
                    type="text"
                    onChange={handleFirstNameChange}   
                    color="default"
                    classNames={{
                      inputWrapper: "border-2 border-[#424242] hover:border-[#424242] focus:border-[#424242] border-opacity-100",
                      input: "text-[#171717]"
                    }}
                    className="bg-transparent mr-2"
                    isInvalid={firstNameTouched && !firstName}
                    errorMessage={firstNameTouched && !firstName ? 'Ім\'я не може бути пустим' : ''}
                  />

                  <Input
                    radius="full"
                    placeholder="Прізвище"
                    variant="bordered"
                    type="text"
                    onChange={handleLastNameChange}
                    classNames={{
                      inputWrapper: "border-2 border-[#424242] hover:border-[#424242] focus:border-[#424242] border-opacity-100",
                      input: "text-[#171717]"
                    }}
                    className="bg-transparent font-normal text-[#30303080]"
                    isInvalid={lastNameTouched && !lastName}
                    errorMessage={lastNameTouched && !lastName ? 'Прізвище не може бути пустим' : ''}
                  />
                </div>
              </div>
            <Spacer />
            
            <Checkbox className="mt-1 ml-auto" radius="sm" color="default">
              <p className="text-[#303030] font-medium text-xs">Я прочитав(-ла) та приймаю<br/>
                <span className="text-[#303030] font-bold">Політику конфіденційності</span>
              </p>
            </Checkbox>

            <Spacer />
            <div className="flex justify-center text-center mt-5 mb-2">
              <Button className="w-1/2 rounded-full text-white bg-[#5DB3C1] font-light" type="submit" disabled={isLoading}>
                {isLoading ? 'Завантаження...' : 'Створити'}
              </Button>
            </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>

        </div>

      {/* Правый блок с изображением */}
      <div className="relative flex-1 overflow-hidden md:ml-8">
        <Image src={loginFormImage} alt="Login Image" layout="fill" objectFit="cover" className="rounded-[20px]" />
      </div>
    </div>
  </div>
  );
};

export default RegisterPage;