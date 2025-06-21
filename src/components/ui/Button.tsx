import type { ReactNode } from "react";

const Button = ({icon, btnTitle, bg}: {icon?: ReactNode; btnTitle: string; bg: string}) => {
    return (
        <button className={`px-5 py-2 rounded-md text-lg ${bg} flex items-center gap-2 cursor-pointer active:scale-95 duration-1000`}>
            <span>{icon}</span> <span>{btnTitle}</span>
        </button>
    );
};

export default Button;