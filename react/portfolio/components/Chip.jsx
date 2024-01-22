import React from "react";

export function Chip({label}){
    return (
        <div className=" inline-block px-4 py-2 bg-gray-200 rounded-full text-gray-700 dark:text-gray-200 dark:bg-gray-800">
            {label}
        </div>
    );

}