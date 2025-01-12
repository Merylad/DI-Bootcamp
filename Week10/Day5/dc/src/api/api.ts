const getRecipes = async (): Promise<any> => {
    const response = await fetch('https://dummyjson.com/recipes');
  
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    return data;
  };
  
export default getRecipes