import instance from "./intance";


export const getAll = () => {
    const url = "/products"
    return instance.get(url)
}

export const createProduct = (data:any) => {
    const url = "/products"
    console.log("DATA POST: ", JSON.stringify(data))
    return instance.post(url, data)
}
export const updateproduct = (id: any, data: any) => {
    
    const url = `/products/${id}`;
    return instance.put(url, data)

}
export const readoneProduct = (id: any) => {
    
    const url = `/products/${id}`;
    return instance.get(url)

}
