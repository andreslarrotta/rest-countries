"use client";

import React, { useState, useRef, useEffect } from 'react';

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    placeholder?: string;
    onSelect: (value: string) => void;
    initialValue?: string;
}

export default function CustomSelect({ options, placeholder = "Selecciona una opción", onSelect, initialValue }: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>(initialValue || '');
    const selectRef = useRef<HTMLDivElement>(null);

    const displayLabel = selectedValue
        ? options.find(option => option.value === selectedValue)?.label
        : placeholder;

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOptionClick = (option: Option) => {
        setSelectedValue(option.value);
        onSelect(option.value);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left" ref={selectRef}>
            <button
                type="button"
                className="inline-flex justify-between h-[50px]  items-center w-full px-4 py-2 text-sm font-medium rounded-md shadow bg-elements dark:border-gray-600 dark:bg-elements focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-background dark:focus:ring-offset-gray-800 min-w-[200px]"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='text-base'>{!displayLabel ? 'Filter by Region' : displayLabel}</span>
                <svg
                    className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow dark:bg-elements focus:outline-none z-10"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleOptionClick(option)}
                                className={`block w-full text-left px-4 py-2 text-sm ${selectedValue === option.value
                                    ? 'bg-background text-white dark:bg-elements'
                                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600' // Estilo normal
                                    }
                `}
                                role="menuitem"
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}