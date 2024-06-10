import axios from "axios";

export const charge = async (data) => {
    try {
        const  temp = await axios.post("http://localhost:8080/public/payment/charge", data);
        return temp.data;
    }catch (e) {
        console.log(e);
        throw e;
    }
}