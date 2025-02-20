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
    counts: Record<number, number>;
    increment: (index: number) => void;
    decrement: (index: number) => void;
    addToCart: (item: Item) => void;
    removeFromCart: (item: Item) => void;
}

export const useStore = create<StoreState>((set) => ({
    counts: {},
    cartItems: [],
    increment: (index) =>
        set((state) => ({
            counts: {
                ...state.counts,
                [index]: (state.counts[index] || 0) + 1,
            },
        })),

    decrement: (index) =>
        set((state) => ({
            counts: {
                ...state.counts,
                [index]: Math.max((state.counts[index] || 0) - 1, 0),
            },
        })),

    addToCart: (item) =>
        set((state) => {
            const existingItem = state.cartItems.find((cartItem) => cartItem.name === item.name);
            if (existingItem) {
                return {
                    cartItems: state.cartItems.map((cartItem) =>
                        cartItem.name === item.name
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    ),
                };
            } else {
                return {
                    cartItems: [...state.cartItems, { ...item, quantity: 1 }],
                };
            }
        }),

    removeFromCart: (item) =>
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
}));
