import React from "react";

import RevenueBoard from "../../component/AdminDashboard/revenueboard";
import TripBoard from "../../component/AdminDashboard/tripboard";
import RevenueTripChart from "../../component/AdminDashboard/revenueAndTripChart";
export function Home() {
  return (
    <div>
      <div className="space-x-14 flex justify-start mb-[2rem]">
        <RevenueBoard />
        <TripBoard />
      </div>
      <div>
      <RevenueTripChart />
      </div>
    </div>
  );
}

export default Home;


