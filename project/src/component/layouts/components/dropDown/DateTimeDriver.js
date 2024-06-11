import React, { useState } from "react";
import { ConfigProvider, DatePicker, Space, Typography } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import enUS from "antd/es/locale/en_US";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);
const { Title } = Typography;

const buddhistLocale = {
  ...en,
  lang: {
    ...en.lang,
    fieldDateFormat: "BBBB-MM-DD",
    fieldDateTimeFormat: "BBBB-MM-DD HH:mm:ss",
    yearFormat: "BBBB",
    cellYearFormat: "BBBB",
  },
};

const defaultValue = dayjs("2024-01-01");
const DateTimeDriver = () => {
  const [] = useState();

  return (
    <Space direction="vertical" className="flex flex-row h-[76px]">
      <div className="flex flex-col px-[0.75rem] ">
        <label>Date</label>
        <DatePicker
          defaultValue={defaultValue}
          locale={buddhistLocale}
          className="w-[200px] h-[52px]"
        />
      </div>
      <div className="flex flex-col px-[0.75rem] h-[52px]">
        <label>Time</label>
        <DatePicker
          defaultValue={defaultValue}
          showTime
          locale={buddhistLocale}
          className="h-[52px] w-[200px] py-10"
        />
      </div>
    </Space>
  );
};
export default DateTimeDriver;
