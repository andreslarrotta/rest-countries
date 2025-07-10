export async function getAllContries() {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags');

        if (!res.ok) {
            throw new Error('Failed to fetch countries');
        }

        return res.json();

    } catch (error) {
        console.log("Error fetching countries", error);
    }
}

export async function getContryByName(name: string) {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,population,subregion,capital,region,flags,tld,currencies,languages,borders`);

        if (!res.ok) {
            throw new Error('Failed to fetch countries');
        }

        return res.json();

    } catch (error) {
        console.log("Error fetching countries", error);
    }
}

export async function getContryByCode(code: string) {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}?fields=name`);

        if (!res.ok) {
            throw new Error('Failed to fetch countries');
        }

        return res.json();

    } catch (error) {
        console.log("Error fetching countries", error);
    }
}
