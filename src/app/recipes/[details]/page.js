
import Link from "next/link";

const singleRecipe = async(currentId) =>{
     try {
        const response = await fetch(`https://dummyjson.com/recipes/${currentId}`);
        const data = await response.json();
        return data
     } catch (error) {
        throw new Error(error)
     }
}


const recipeDetails = async ({params}) => {
    const id = params.details;
    const singleRecipeDetails = await singleRecipe(id);
  return (
    <div className="w-[95%] md:w-[85%] lg:w-[95%]  max-w-[1500px] mx-auto mt-10">
       {
        <div className="flex gap-8 lg:gap-5 xl:gap-10 flex-col lg:flex-row">
            <div className="w-[100%] lg:w-[500px] h-[300px] md:h-[500px] overflow-hidden rounded-lg">
                <img className="w-[100%] h-[100%] object-cover" src={singleRecipeDetails?.image} alt={singleRecipeDetails?.name} />
            </div>
            <div className=" flex flex-col gap-4">
                 <div className=" text-2xl md:text-4xl font-bold">
                     {singleRecipeDetails?.name}
                 </div>
                 <div>
                     <span className="font-bold text-lg">Ingredients :</span>
                     {singleRecipeDetails?.ingredients.map((item,index)=>(
                        <ul key={index} className="mt-1 text-gray-500 font-bold">
                            <li>{item}</li>
                        </ul>
                     ))}
                 </div>

                 <div>
                 <span className="font-bold text-lg">Instructions :</span>
                     {singleRecipeDetails?.instructions.map((item,index)=>(
                         <ul key={index} className="mt-1 text-gray-500 font-bold">
                             <li>"{item}"</li>
                         </ul>
                     ))}
                 </div>

                 <div>
                 <span className="font-bold text-lg">Cooking Time :</span> <span className="text-gray-500 font-bold">{singleRecipeDetails?.cookTimeMinutes}mins</span>
                 </div>

                 <div>
                 <span className="font-bold text-lg">Calories Per Serving :</span> <span className="text-gray-500 font-bold">{singleRecipeDetails?.caloriesPerServing}gm</span>
                 </div>

                 <div>
                   <span className="font-bold text-lg">Meal Type :</span> {singleRecipeDetails?.mealType.map((item,index)=>(<span className="text-gray-500 font-bold px-1" key={index}>{item}</span>))}
                 </div>

                 <div>
                    <span className="font-bold text-lg">Rating : </span> <span className="text-gray-500 font-bold">{singleRecipeDetails?.rating}/5</span>
                 </div>
                 
                 <Link href={'/recipes'}>
                 <button className="bg-blue-400 px-5 py-3 text-white tracking-widest uppercase font-bold rounded-lg">Go Back</button>
                 </Link>
            </div>
        </div>
       }
    </div>
  )
}

export default recipeDetails
