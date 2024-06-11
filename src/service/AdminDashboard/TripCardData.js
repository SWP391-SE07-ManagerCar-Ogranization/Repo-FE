import axios from "axios";


export const todayTrip = async () => {
    try {
        const  temp = await axios.get("http://localhost:8080/public/transaction/getTodayTrip");
        return temp.data;
    }catch (e) {
        console.log(e);
        throw e;
    }
}

export const thisMonthTrip = async () => {
    try {
        const  temp = await axios.get("http://localhost:8080/public/transaction/getThisMonthTrip");
        return temp.data;
    }catch (e) {
        console.log(e);
        throw e;
    }
}

export const thisYearTrip = async () => {
    try {
        const  temp = await axios.get("http://localhost:8080/public/transaction/getThisYearTrip");
        return temp.data;
    }catch (e) {
        console.log(e);
        throw e;
    }
}
