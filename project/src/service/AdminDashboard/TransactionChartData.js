import axios from "axios";

export const fetchRevenueInLast7Days = async () => {
    try {
        const response = await axios.get("http://localhost:8080/public/transaction/getTransactionsInLast7Days");
        return response.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export const fetchRevenueInLast12Months = async () => {
    try {
        const response = await axios.get("http://localhost:8080/public/transaction/getTransactionsInLast12Months");
        return response.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export const fetchRevenueInLast3Years = async () => {
    try {
        const response = await axios.get("http://localhost:8080/public/transaction/getTransactionsInLast3Years");
        return response.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export const fetchTripInLast12Months = async () => {
    try {
        const response = await axios.get("http://localhost:8080/public/transaction/getTripsInLast12Months");
        return response.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
};
