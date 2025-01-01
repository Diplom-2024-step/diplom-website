import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import avatar1 from '@/assets/images/profile/avatar.png'
import avatar2 from '@/assets/images/profile/avatar2.png'
import avatar3 from '@/assets/images/profile/avatar3.png'
import avatar4 from '@/assets/images/profile/avatar4.png'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}


export const updateSearchParams = (type: string, value: string) => {

	const searchParams = new URLSearchParams(window.location.search);

	searchParams.set(type, value);

	const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
	return newPathName;
};

export function getIconAccordingToIconNumber(iconNumber: string) {
	if (iconNumber === '1')
		{
			return avatar1;
		}
	else if (iconNumber === '2'){
		return avatar2;
	}
	else if (iconNumber === '3'){
		return avatar3;
	}
	return avatar4;
} 