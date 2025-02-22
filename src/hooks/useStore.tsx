import { create } from 'zustand';

interface Item {
    name: string;
    category: string;
    price: number;
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
    quantity: number;
}

interface StoreState {
    cartItems: Item[];
    counts: Record<string, number>;
    increment: (name: string) => void;
    decrement: (name: string) => void;
    addToCart: (item: Item) => void;
    removeFromCart: (item: Item) => void;
    deleteItem: (name: string) => void;
    orderCard: boolean;
    setOrderCard: (value: boolean) => void;
    reset: () => void;
}


export const useStore = create<StoreState>((set) => ({
    counts: {},
    cartItems: [],
    increment: (name: string) =>
        set((state) => ({
            counts: {
                ...state.counts,
                [name]: (state.counts[name] || 0) + 1,
            },
        })),

    decrement: (name: string) =>
        set((state) => ({
            counts: {
                ...state.counts,
                [name]: Math.max((state.counts[name] || 0) - 1, 0),
            },
        })),

    addToCart: (item: Item) =>
        set((state) => {
            const existingItem = state.cartItems.find((cartItem) => cartItem.name === item.name);
            return {
                cartItems: existingItem
                    ? state.cartItems.map((cartItem) =>
                        cartItem.name === item.name
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    )
                    : [...state.cartItems, { ...item, quantity: 1 }]
            };
        }),

    removeFromCart: (item: Item) =>
        set((state) => {
            const existingItem = state.cartItems.find((cartItem) => cartItem.name === item.name);

            if (existingItem && existingItem.quantity > 1) {
                return {
                    cartItems: state.cartItems.map((cartItem) =>
                        cartItem.name === item.name
                            ? { ...cartItem, quantity: cartItem.quantity - 1 }
                            : cartItem
                    ),
                };
            } else {
                return {
                    cartItems: state.cartItems.filter((cartItem) => cartItem.name !== item.name),
                };
            }
        }),

    deleteItem: (name: string) => {
        set((state) => {
            const removeItem = state.cartItems.filter((cartItem) => cartItem.name !== name);
            const updatedCounts = { ...state.counts };
            delete updatedCounts[name];
            return {
                cartItems: removeItem,
                counts: updatedCounts,
            };
        });
    },

    reset: () => set({ cartItems: [], counts: {} }),

    orderCard: false,
    setOrderCard: (value: boolean) => set({ orderCard: value }),
}));
