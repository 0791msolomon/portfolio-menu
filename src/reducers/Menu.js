import { SELECT_MENU } from "../actions";

const breakfast = [
  {
    meal: "Florentine Benedict",
    description:
      "English muffin, sautéed spinach, tomato and 2 poached eggs topped with hollandaise and choice of potato",
    price: 12.99
  },
  {
    meal: "Mediterranean Avocado Toast",
    description: "Bacon, feta cheese and grape tomatoes",
    price: 9.99
  },
  {
    meal: "GREEN CHILE PORK & GRITS",
    description:
      "Slow-cooked pork, green chili sauce, black pepper, parmesan grits, and sunny side up egg.",
    price: 13.99
  },
  {
    meal: "Lemon Ricotta Pancakes",
    description:
      "Old fashioned malted waffle lemon ricotta pancakes Light & lacy pancakes with fresh berries",
    price: 9.99
  },
  {
    meal: "Southwest Omelette",
    description:
      "Diced chicken, pico de gallo, cheddar cheese topped with ranchero sauce, avocado and sour cream",
    price: 10.99
  },
  {
    meal: "Cubano with Sunny Egg ",
    description:
      "Slow cooked pork shoulder, ham and pickle with mustard, spicy mayo and melted swiss topped with a sunny egg",
    price: 9.99
  },
  {
    meal: "Turkey Avocado",
    description:
      "Sliced turkey, avocado, swiss cheese, wild arugula and tomato, mayo and yellow mustard on wheat toast add bacon",
    price: 12.99
  }
];
const lunch = [
  {
    meal: "Southern Fried Chicken",
    description:
      "Hand-breaded, buttermilk fried chicken breast | pepper cream gravy | white cheddar mashed potatoes | corn + fire-roasted red pepper succotash",
    price: 9.75
  },
  {
    meal: "Grilled Chicken Alfredo",
    description:
      "Seasoned grilled chicken | fettuccini | creamy alfredo | steamed broccoli | parmesan cheese",
    price: 10.75
  },
  {
    meal: "Jumbo Spaghetti & Meatballs",
    description:
      "Housemade meatballs | San Marzano marinara | garlic | red pepper flakes | fresh basil | parmesan cheese",
    price: 10.95
  },
  {
    meal: "Half Flatbread",
    description:
      "Half-size portion of any flatbread pizza | choice of soup or salad",
    price: 9.99
  },
  {
    meal: "Half California Chicken Club Sandwich",
    description:
      "Seasoned grilled chicken | applewood smoked bacon | avocado | melted swiss cheese | lettuce | tomatoes | roasted garlic aioli | toasted sourdough bread | fries | choice of housemade soup or salad",
    price: 10.99
  },
  {
    meal: "Caprise Piadina ",
    description:
      "Fresh mozzarella | diced tomatoes | fresh basil | italian herbs | San Marzano marinara | marinara for dipping | served with fries",
    price: 7.75
  },
  {
    meal: "Buffalo Chicken Grilled Cheese",
    description:
      "Toasted sourdough bread | fried chicken tenders | Hot and Spicy Buffalo sauce | provolone cheese | bleu cheese for dipping | served with sliced dill pickle chips and fries",
    price: 10.99
  }
];

const dinner = [
  {
    meal: "Prime Rib",
    description:
      "Tender Prime Rib, roasted in-house and served with au jus and homemade creamy horseradish.",
    price: 38.0
  },
  {
    meal: "Bart's broiled chicken",
    description:
      "Half a chicken brined in herbs & spices, then lightly smoked in-house with mesquite and apple woods. Broiled with your choice of BBQ or Butter Herb Sauce.",
    price: 25.0
  },
  {
    meal: "Rack of Lamb",
    description: "10 oz. of New Zealand Lamb served with Jalapeño Mint Jelly.",
    price: 36.0
  },
  {
    meal: "Baby Back Ribs",
    description: "Broiled over an oak fire and covered in bold BBQ sauce.",
    price: 36.99
  },
  {
    meal: "Scottish Salcom",
    description:
      "An 8 oz. portion, hand-cut from whole Scottish Salmon served with homemade cucumber dill sauce. Choose grilled, blackened, or teriyaki.",
    price: 36.0
  },
  {
    meal: "Bart's Fried Shrimp",
    description:
      "8 large shrimp dipped in our house batter and deep-fried to perfection. Served with house-made cocktail sauce.",
    price: 28.0
  },
  {
    meal: "Twin Lobster Tails",
    description: "Two 6 oz. Lobster Tails served with Clarified Butter.",
    price: 34.0
  }
];
export default function(state = breakfast, action) {
  switch (action.type) {
    case SELECT_MENU:
      if (action.payload === "breakfast") {
        return breakfast;
      } else if (action.payload === "lunch") {
        return lunch;
      } else {
        return dinner;
      }
    default:
      return state;
  }
}
