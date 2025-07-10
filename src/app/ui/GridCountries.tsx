
import Image from "next/image";
import Link from "next/link";
import { Country } from "@/app/types/countries";

interface GridCountriesProps {
    countries: Array<Country>;
}

const GridCountries: React.FC<GridCountriesProps> = ({ countries }) => {

    return <div className="grid grid-cols-4 gap-x-15 gap-y-10 max-md:grid-cols-2 max-lg:grid-cols-3 max-sm:flex max-sm:flex-col">
        {
            countries.map((country: Country, index: number) => {
                return <Link key={index} href={`/${country.name.common.toLowerCase()}`}>
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
                            <p className="text-base"><span className="font-bold">Population:</span> {country.population.toLocaleString()}</p>
                            <p className="text-base"><span className="font-bold">Region:</span> {country.region}</p>
                            <p className="text-base"><span className="font-bold">Capital:</span> {country.capital[0]}</p>
                        </div>
                    </article>
                </Link>
            })
        }
    </div>
}

export default GridCountries;