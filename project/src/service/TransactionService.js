import axios from "axios";

export const addTrans = async (resrep) => {
    try {
        const  temp = await axios.post("http://localhost:8080/public/invoice/addtran/invoice",resrep);
        return temp.data;
    }catch (e) {
        console.log(e);
        throw e;
    }
}