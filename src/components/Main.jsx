import React, { useState } from "react";
import InputInfo from "./InputInfo";
import ShowInfo from "./ShowInfo";

const Main = () => {
    const [data, setData] = useState({});

    return (
        <main>
            <InputInfo data={data} setData={setData} />
            <ShowInfo data={data} />
        </main>
    );
};

export default Main;
