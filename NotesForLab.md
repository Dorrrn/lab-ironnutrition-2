# Notes for lab

# Iteration 0 - Setup

1. $ npm install bulma --save (css framework)
2. in App.js
   --> import 'bulma/css/bulma.css';
   --> import foods from './foods.json';

---

# Iteration 1 - FoodBox

1. add new FoodBox.js component
2. return the given html in instructions to render the food
3. import FoodBox component into App.js and call it to render (in return...)  
   -> import FoodBox from './components/FoodBox';
   -> return <FoodBox />

---

# Iteration 2 - Display foods from json

1. use props in FoodBox.js component and change values accordingly (check json for values)
2. in App.js use .map() method to render all foods from json
   (no state neccessary here)

```
   {foods.map((food) => {
   return (
   <FoodBox
      name={food.name}
      calories={food.calories}
      image={food.image}
    />
   );
   })}
```

---

# Iteration 3 - Add new food form (tricky)

## 1. add new AddFoodForm.js component

## 2. create Form with all input values (name, image, calories, servings)

```
    <label>Image</label>
         <input
         name="image"
         value={addedFood.image}
         type="text"
         placeholder="https://via.placeholder.com/30x30"
         onChange={handleInputChange}
         />
```

## 3. create useState for addedFood with initial states for these values (empty strings)

```
   const [addedFood, setAddedFood] = useState({
   name: '',
   image: '',
   calories: '',
   servings: '',
   });
```

## 4. create function to handleInputChange (important call setAddedFood)

```
   const handleInputChange = (event) => {
   const value = event.target.value;
   setAddedFood({ ...addedFood, [event.target.name]: value });
   };
```

## 5. create function for submitButton and define function handleSubmit as props to App.js

```
const submitButton = (event) => {
props.handleSubmit(event, addedFood);
};
```

### // function to hide

## 6. add useState to change this property

```
const [isHide, setIsHide] = useState(false);
```

## 7. create function to hide/show form in button

```
  const handleHide = () => {
    setIsHide(!isHide);
  };
```

## 8. add property in App.css with class with default not displayed

```
.hide {
  display: none;
}
```

## 9. add className to Form div

```
<div className={isHide ? 'show' : 'hide'}>
```

### // Lift up to App.js

## 10. in App.js import AddFoodForm.js

## 11. now add useState to change rendered FoodsList

```
const [foods, setFoods] = useState(foodsList);
```

## 12. add function handleSubmit (for props from AddFoodForm)

```
    const handleSubmit = (event, newFood) => {
    event.preventDefault();
    const updateFood = [newFood, ...foods];
    setFoods(updateFood);
    };
```

## 13. add AddFoodForm component in return to render

```
    <AddFoodForm handleSubmit={handleSubmit} />
```

---

# Iteration 4 - Search

## 1. add searchbar html with input field in App.js (no need for extra component)

## 2. add state for filteredFoods

```
const [filteredFoods, setFilteredFoods] = useState('');
```

## 3. add function handleSearchInput

```
const handleSearchInput = (event) => {
setFilteredFoods(event.target.value);
};
```

## 4. change your foods.map()

(filter before map + iternary operator for when foodsList = 0))
(when filter make it case insensitive with tolowerCase())

```
{foods.length === 0 ? (
            <h1>Oops! There is no more content to show</h1>
          ) : (
            foods
              .filter((food) => {
                const lowerFilter = filteredFoods.toLocaleLowerCase();
                return food.name.toLocaleLowerCase().includes(lowerFilter);
              })
              .map((food, index) => {
                return (
                  <div key={index}>
                    <FoodBox
                      name={food.name}
                      calories={food.calories}
                      image={food.image}
                    />
                  </div>
                );
              })
          )}
```

# Iteration 5 - Create add-button // Todays Food
