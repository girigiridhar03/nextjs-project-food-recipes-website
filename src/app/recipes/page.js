import Link from "next/link";




async function fetchRecipesData(){
     try {
        const response = await fetch(`https://dummyjson.com/recipes`);
        const data = await response.json();
        return data.recipes
     } catch (error) {
        throw new Error(error)
     }
}



const recipes = async() => {
  
   const recipes = await fetchRecipesData();
   console.log(recipes)

  return (
    <div className="w-[90%]  max-w-[1500px]  mx-auto">
        <h1 className="text-center text-5xl font-bold mt-10">Food Recipes</h1>
       
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:gap-8 md:gap-3 lg:gap-5 xl:gap-8 my-5 space-y-5 md:space-y-0">
             {recipes && recipes.length > 0 ? 
                  recipes?.map(recipe=>(
                    <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
                          <div  className="bg-[rgb(245,246,247)]  flex flex-col  gap-4 p-5 rounded-lg overflow-hidden shadow-md">
                          <div className="w-[100%] h-[350px] mx-auto overflow-hidden round">
                            <img className="w-[100%] h-[100%] object-cover" src={recipe.image} alt={recipe.name} />
                          </div>
                          <div className="font-bold text-2xl text-slate-500">
                             {recipe.name}
                          </div>
                           <div>
                           <span className="font-bold"> Calories Per Serving :</span> <span className="text-green-500 font-bold">{recipe.caloriesPerServing}gm</span>
                           </div>

                           <div className="flex justify-between">
                            <div>
                           <span className="font-bold"> Rating : </span> <span className="text-yellow-500 font-bold">{recipe.rating}</span>
                            </div>
                             <div className="font-bold text-slate-600">
                                {recipe.cuisine}
                             </div>
                           </div>
                      </div>
                    </Link>
                  ))
              : null}
        </div>
    </div>
  )
}

export default recipes
