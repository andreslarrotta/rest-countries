"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Country } from "@/app/types/countries";
import CustomSelect from "@/app/ui/CustomSelect";


interface GridCountriesProps {
    countries: Array<Country>;
}

const GridCountries: React.FC<GridCountriesProps> = ({ countries }) => {
    const [arrayCountries, setArrayCountries] = useState<Array<Country>>(countries);
    const [selectedRegion, setSelectedRegion] = useState<string>('');
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const regionOptions = [
        { value: 'africa', label: 'Africa' },
        { value: 'americas', label: 'Americas' },
        { value: 'asia', label: 'Asia' },
        { value: 'europe', label: 'Europa' },
        { value: 'oceania', label: 'Oceania' },
    ];

    const handleRegionSelect = (value: string) => {
        setSelectedRegion(value);
    };

    useEffect(() => {
        if (selectedRegion) {
            setArrayCountries(countries.filter((country: Country) => {
                return country.region.toLowerCase() === selectedRegion.toLowerCase();
            }));
            return;
        }
    }, [selectedRegion, countries]);

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredCountries(arrayCountries);
            return;
        }

        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const newFilteredCountries = arrayCountries.filter(country =>
            country.name.common.toLowerCase().includes(lowercasedSearchTerm)
        );
        setFilteredCountries(newFilteredCountries);
    }, [searchTerm, arrayCountries]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return <section>
        <div className="mb-15 flex justify-between w-full sticky top-[100px]">
            <div className="sticky top-[200px] w-full">
                <Image
                    className="dark:invert absolute top-1/2 left-4 -translate-y-1/2"
                    src="/search.svg"
                    alt="Dark mode icon"
                    width={20}
                    height={20}
                    priority
                />
                <input
                    id="filter"
                    name="filter"
                    className="text-base text-white dark:bg-elements bg-elements shadow h-[50px] pl-15 w-[35%] max-md:w-[90%] rounded"
                    type="text"
                    placeholder="Search for a country..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div>
                <CustomSelect
                    options={regionOptions}
                    onSelect={handleRegionSelect}
                    initialValue="all" 
                />
            </div>
        </div>
        <div className="grid grid-cols-4 gap-x-15 gap-y-10 max-md:grid-cols-2 max-lg:grid-cols-3 max-sm:flex max-sm:flex-col">
            {
                filteredCountries.map((country: Country, index: number) => {
                    return <Link key={index} href={`/${country?.name?.common.toLowerCase()}`}>
                        <article className="bg-elements shadow">
                            <Image
                                className="w-full shadow object-cover h-[150px]"
                                src={country.flags.png}
                                alt="Dark mode icon"
                                width={320}
                                height={213}
                                priority
                            />
                            <div className="p-5">
                                <h2 className="text-lg font-extrabold mb-3">{country.name.common}</h2>
                                <p className="text-base"><span className="font-bold">Population:</span> {country?.population.toLocaleString()}</p>
                                <p className="text-base"><span className="font-bold">Region:</span> {country?.region}</p>
                                <p className="text-base"><span className="font-bold">Capital:</span> {country?.capital[0]}</p>
                            </div>
                        </article>
                    </Link>
                })
            }
        </div>
    </section>
}

export default GridCountries;