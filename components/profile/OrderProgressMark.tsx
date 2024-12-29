import { Icon } from '@iconify/react';
import { IconifyIconComponent } from 'iconify-icon';
import React from 'react'


export enum MarkStatus {
    started,
    finished,
    neverStarted
}

const getStatusClass = (status: MarkStatus) => {
    switch (status) {
        case MarkStatus.finished:
            return 'bg-primary text-white';
        case MarkStatus.started:
            return 'bg-yellow-400 text-white';
        default:
            return 'bg-gray-100 text-gray-400';
    }
};

const getStatusText = (status: MarkStatus) => {
    switch (status) {
        case MarkStatus.finished:
            return 'Завершено';
        case MarkStatus.started:
            return 'В процесі';
        default:
            return 'В очікуванні';
    }
};

const iconMap = {
    'check': <Icon icon="game-icons:check-mark" width="24" height="24" />,
    'dollar': <Icon icon="iconoir:dollar" width="24" height="24" />,
    'file': <Icon icon="bx:file" width="24" height="24" />,
    'briefcase': <Icon icon="bi:suitcase" width="24" height="24" />
};


const OrderProgressMark = (
    {
        status,
        icon,
        title
    } 
    :
    {
        status:MarkStatus,
        icon: keyof typeof iconMap,
        title:string
    }
) => {
   const Icon = iconMap[icon];
    const statusClass = getStatusClass(status);
    const statusText = getStatusText(status);

    return (
        <div className="flex flex-col items-center gap-2">
            <div className={`w-12 h-12 rounded-full  flex items-center justify-center ${statusClass}`}>
                {Icon}
            </div>
            <div className="text-center">
                <div className={`text-[12px] font-unbounded ${status === MarkStatus.neverStarted ? 'text-[#ABABAB]' : 'text-black'}`}>{title}</div>
                <div className={`text-[12px] mt-2 text-nowrap font-nunito_font_family  rounded-full px-1 ${status === MarkStatus.neverStarted ? 'border-[#ABABAB] border-1' : 'bg-[#E8EDF1]'}`}>
                    {statusText}
                </div>
            </div>
        </div>
    );
}

export default OrderProgressMark