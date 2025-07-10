import Link from "next/link";
import Image from "next/image";

import CountryCode from "../ui/BorderCountry";
import { getContryByName } from "../lib/data";

type Props = {
    params: Promise<{ country: string }>
}

export default async function Country({ params }: Props) {
    const slug = await params
    const countryData = await getContryByName(slug.country) ?? [];
    const currencyKeys = Object.keys(countryData[0].currencies);
    const languagesKeys = Object.keys(countryData[0].languages);

    return (
        <div className="w-full">
            <main className="max-w-desktop m-auto py-8 px-[100px] max-lg:px-[30px]">
                <Link href="/" className="text-base font-medium shadow py-2 px-5 flex items-center w-fit mb-5 bg-elements rounded">
                    <Image
                        className="dark:invert mr-3"
                        src="/back.svg"
                        alt="Dark mode icon"
                        width={20}
                        height={20}
                        priority
                    /> Back
                </Link>
                <div className="flex items-center justufy-between mt-[60px] max-lg:flex-col">
                    <div className="w-[50%] mr-20 max-lg:mr-0 max-md:w-full">
                        <Image
                            className="w-full shadow max-lg:mb-[25px]"
                            src={countryData[0].flags.png}
                            alt="Dark mode icon"
                            width={600}
                            height={213}
                            priority
                        />
                    </div>
                    <div className="w-[50%] max-md:w-full">
                        <h1 className="text-lg font-extrabold mb-5">{countryData[0].name.common}</h1>
                        <div className="flex w-full justify-between max-sm:flex-col">
                            <div className="w-[50%] max-sm:w-full">
                                <p className="text-base mb-1"><span className="font-bold">Native Name:</span> {countryData[0].name.nativeName.official}</p>
                                <p className="text-base mb-1"><span className="font-bold">Population:</span> {countryData[0].population.toLocaleString()}</p>
                                <p className="text-base mb-1"><span className="font-bold">Region:</span> {countryData[0].region}</p>
                                <p className="text-base mb-1"><span className="font-bold">Sub Region:</span> {countryData[0].subregion}</p>
                                <p className="text-base mb-1"><span className="font-bold">Capital:</span> {countryData[0].capital}</p>
                            </div>
                            <div className="w-[50%] max-sm:w-full max-sm:mt-[20px]">
                                <p className="text-base mb-1"><span className="font-bold">Top Level Domain:</span> {countryData[0].tld[0]}</p>
                                <p className="text-base mb-1"><span className="font-bold">Currencies:</span> {countryData[0].currencies[currencyKeys[0]].name}</p>
                                <p className="text-base mb-1"><span className="font-bold">Languages:</span> {countryData[0].languages[languagesKeys[0]]}</p>

                            </div>
                        </div>
                        <div className="flex items-center mt-[30px] max-lg:flex-col max-lg:items-start">
                            <h2 className="text-lg font-bold mr-10 max-lg:mb-[20px]">Border Countries:</h2>
                            <div>
                                {countryData[0].borders.map((border: string) => (
                                    <CountryCode key={border} countryCode={border} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
