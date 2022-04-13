export const baseURL = "https://62286b649fd6174ca82321f1.mockapi.io/case-study/";


export const endPoints = {
    getProducts: (data: string): string => `/products?${data}`,
    getProductItem: (id?: string): string => `/products/${id}`,
    getCategories: (): string => "/categories",
    addProduct: (): string => "/products",
    deleteProductItem: (id: string): string => `/products/${id}`

}