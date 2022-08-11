# createContext

-create a file that will represent the context\
-import createContext from react\
-creation of the context ex:

    const CartContext = createContext();

-export it 

    export default CartContext;

-export the provider => the parent of the CartContext element, thanks it every component that we wrap around gonna have access to the value;
children is a prop that React give, it represent all the components that are wrapped around this context provider  ex:

    export function CartProvider({ children }) {

    return (
        <CartContext.Provider value={{ item : 1 }}>{children}</CartContext.Provider>
    )
    
    }

-then take this provider and wrap the application around, in App.js :

    import { CartProvider } from './CartContext' 

    function App() {
    return (
        <div className="App">
        <CartProvider>
            <Nav/>
            <Routes>
                <Route path="/" element={<Products />}/>
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </CartProvider>
        </div>
    );
    }

-to use it (so the value inside the provider), start to import CartContext and useContext, ex in Nav.js

    import CartContext from '../CartContext';
    import { useContext } from 'react';

-to have access and extract to the value save in variable the context:

     const { item } = useContext(CartContext);

-to have more dynamic access, i can create directly some state and function and pass it to the provider's children ex in CartContext.js:

    export function CartProvider({ children }) {

    const [items, setItems] = useState([]);

    const addToCart = (name, price) => {
        setItems((prevState) => [...prevState, { name , price}]);
    };

    return (
        <CartContext.Provider value={{ items, addToCart }}>{children}</CartContext.Provider>
    )

    }

-other exemple with the function addToCart in Card.js :

    function Card({name, price}) {

    const { addToCart } = useContext(CartContext)

    return(
        <div onClick={() => addToCart(name, price)} className='card'>
            <div className='product-box'>
                <IoAccessibilitySharp />
            </div>
            <div className='purchase'>
                <h3>{name}</h3>
                <AiFillShopping />
            </div>
            <h4>${price}</h4>
        </div>
    )
}