import React from 'react';

function Card() {
  return (
    <div className="bg-slate-500 text-center px-8 py-2 rounded-xl m-3">
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Recipe Name</th>
            <th className="px-4 py-2">Recipe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Maggie</td>
            <td><a href="https://www.maggi.in/en/recipes/maggi-noodles/" rel="noreferrer" target="_blank">Click here for Maggie recipe</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2">Pasta</td>
            <td><a href="https://www.indianhealthyrecipes.com/masala-pasta/" rel="noreferrer" target="_blank">Click here for Pasta recipe</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2">Spring roll</td>
            <td><a href="https://www.indianhealthyrecipes.com/baked-vegetable-spring-rolls-recipe-crusty-oven-baked-vegetable-spring-rolls/" rel="noreferrer" target="_blank">Click here for Springroll recipe</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2">Kimchi</td>
            <td><a href="https://www.maangchi.com/recipe/tongbaechu-kimchi" rel="noreferrer" target="_blank">Click here for Kimchi recipe</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2">Red rice cakes (tteokbokki)</td>
            <td><a href="https://www.koreanbapsang.com/tteokbokki-spicy-stir-fried-rice-cakes/" rel="noreferrer" target="_blank">Click here for Tteokbokki recipe</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Card;


