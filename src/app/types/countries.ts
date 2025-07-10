export interface Country {
    capital: [string];
    population: number;
    region: string;
    name: {
        common: string;
    };
    flags: {
        alt: string;
        svg: string;
        png: string;
    }
}