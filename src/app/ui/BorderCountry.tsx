
import Link from "next/link";
import { getContryByCode } from "../lib/data";

interface BorderCountryProps {
    countryCode: string
}

async function BorderCountry({ countryCode }: BorderCountryProps) {
    const countryData = await getContryByCode(countryCode.toLowerCase()) ?? [];

    console.log('desde un componet', countryData.name.common)

    return <Link href={`/${countryData.name.common}`} className="text-base font-medium shadow py-2 px-5 w-fit bg-elements rounded mr-2 mb-3 inline-block">
        <div className="text-nowrap">
            {countryData.name.common}
        </div>
    </Link>
}

export default BorderCountry;