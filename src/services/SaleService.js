import axios from "axios";

const saleUrl = "http://localhost:3002/ventas";

class SaleService {

    getSales(){
        return axios.get(saleUrl + '/');
    }

    getSaleById(id){
        return axios.get(saleUrl + '/' + id);
    }

    createSale(sale){
        return axios.post(saleUrl + '/',sale);
    }

    deleteSale(id){
        return axios.delete(saleUrl + '/' + id);
    }

    updateSale(sale, id){
        return axios.put(saleUrl + '/' + id, sale);
    }

}
export default new SaleService ()