import Link from "next/link";


export default function Home() {
  return (
    <main className="w-[100%] flex items-center justify-center flex-col gap-10" >
        <div className="text-center text-4xl font-bold mt-10">
         Welcome to Food Recipes
        </div>

        <Link href={'/recipes'}>
           <button className="bg-blue-400 px-5 py-3 text-[1.1rem] uppercase tracking-widest font-bold rounded-lg text-white cursor-pointer">Recipes</button>
        </Link>
    </main>
  );
}
