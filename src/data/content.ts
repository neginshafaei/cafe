import type { LucideIcon } from "lucide-react"
import { Beer, Citrus, Coffee, Egg, Milk, Salad, Sandwich, Utensils } from "lucide-react"

// ✏️ EDIT EVERYTHING HERE: name, texts, menu, prices, hours, contacts.
export const site = {
  name: "Pint",
  tagline: "Coffee in the morning, beer in the evening, and a warm seat in between.",
  opening: "Open",
  story: [
  "Where we come from, an evening starts with a pot of tea and no plan to leave. In Iran, the old qahveh-khaneh coffeehouses were where neighbours played backgammon, argued about football, read Hafez out loud and stayed much longer than they meant to.",
  "Pint is our small corner of it: good coffee, cold beer and simple food made fresh every day, and a table where you're always welcome to stay a little longer.",
],
  address: "xxx", // placeholder, use your real address
  mapQuery: "xxx", // keep in sync with the address
  phone: "+891 11 000 0000",
  email: "hello@Pint.rs",
  instagram: "https://instagram.com/pint",
  instagramHandle: "@Pint",
  currency: "RSD",
  hours: [
    { days: "Monday – Friday", time: "07:30 – 23:00" },
    { days: "Saturday", time: "09:00 – 01:00" },
    { days: "Sunday", time: "09:00 – 22:00" },
  ],
  // Put photos in /public/photos and set src: "/photos/1.jpg". Without src a warm placeholder shows.
  gallery: [
    { src: "", alt: "Our coffee bar", tone: "from-amber-200 to-orange-300" },
    { src: "", alt: "Cold beer on tap", tone: "from-orange-200 to-rose-200" },
    { src: "", alt: "The window seats", tone: "from-stone-300 to-amber-200" },
    { src: "", alt: "Latte art", tone: "from-amber-300 to-stone-300" },
    { src: "", alt: "Breakfast table", tone: "from-rose-200 to-amber-200" },
    { src: "", alt: "Evening light", tone: "from-orange-300 to-amber-100" },
  ],
}

type MenuItem = { name: string; desc: string; price: number; icon: LucideIcon }

export const menu: { id: string; label: string; items: MenuItem[] }[] = [
  {
    id: "drinks",
    label: "Drinks",
    items: [
      { name: "Espresso", desc: "Single origin, short and strong", price: 190, icon: Coffee },
      { name: "Cappuccino", desc: "Silky milk, double shot", price: 280, icon: Coffee },
      { name: "Flat White", desc: "Velvety and bold", price: 300, icon: Milk },
      { name: "Craft Lager", desc: "Local, crisp, 0.5 l", price: 380, icon: Beer },
      { name: "Wheat Beer", desc: "Soft and fruity, 0.5 l", price: 420, icon: Beer },
      { name: "Fresh Orange Juice", desc: "Squeezed to order", price: 350, icon: Citrus },
    ],
  },
  {
    id: "food",
    label: "Food",
    items: [
      { name: "Avocado Toast", desc: "Sourdough, egg, chili flakes", price: 690, icon: Sandwich },
      { name: "Shakshuka", desc: "Baked eggs, tomato, feta, bread", price: 720, icon: Egg },
      { name: "Granola Bowl", desc: "Yogurt, seasonal fruit, honey", price: 520, icon: Salad },
      { name: "Ham & Cheese Toastie", desc: "Grilled, with pickles", price: 560, icon: Sandwich },
      { name: "Loaded Fries", desc: "Crispy, with cheese and herbs", price: 450, icon: Utensils },
    ],
  },
]