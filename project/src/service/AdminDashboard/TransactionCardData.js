import axios from "axios";


export const todayTransactionRevenue = async () => {
    try {
        const  temp = await axios.get("http://localhost:8080/public/transaction/getTodayTransactionRevenue");
        return temp.data;
    }catch (e) {
        console.log(e);
        throw e;
    }
}

export const thisMonthTransactionRevenue = async () => {
    try {
        const  temp = await axios.get("http://localhost:8080/public/transaction/getThisMonthTransactionRevenue");
        return temp.data;
    }catch (e) {
        console.log(e);
        throw e;
    }
}

export const thisYearTransactionRevenue = async () => {
    try {
        const  temp = await axios.get("http://localhost:8080/public/transaction/getThisYearTransactionRevenue");
        return temp.data;
    }catch (e) {
        console.log(e);
        throw e;
    }
}
