import GridCountries from "@/app/ui/GridCountries";
import { getAllContries } from "./lib/data";

export default async function Home() {
  const countries = await getAllContries() ?? [];

  return (
    <div className="w-full">
      <main className="max-w-desktop m-auto py-8 px-[100px] max-lg:px-[30px] relative">
        {
          countries && <GridCountries countries={countries} />
        }
      </main>
    </div>
  );
}
