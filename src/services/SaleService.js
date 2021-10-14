import axios from "axios";

const saleUrl = "http://localhost:3000/ventas/";

export const getSale = async (id) => {
    return await axios.get(`${saleUrl}/${id}`);
}

export const getSales = async () => {
    return await axios.get(`${saleUrl}/`);
}

export const addSale = async (sale) => {
    return await axios.post(`${saleUrl}/`,sale);
}

export const deleteSale = async (id) => {
    return await axios.delete(`${saleUrl}/${id}`);
}

export const editSale = async (sale) => {
    return await axios.put(`${saleUrl}/${sale._id}`,sale);
}