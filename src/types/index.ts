export interface ProductType {
    createdAt: Date;
    name: string;
    avatar: string;
    id: string;
    price: string;
    category: string;
    description: string;
    developerEmail: string;
}


export interface CategoryType {
    createdAt: Date;
    name: string;
    id: string;
}

export interface IInitialState {
    reducer: {
        categories?: CategoryType[],
        selectedCategory?: string,
        products?: ProductType[],
        activeProduct?: ProductType,
        searchInput?: string,
        isLoading: boolean,
        error?: string
    }

}
