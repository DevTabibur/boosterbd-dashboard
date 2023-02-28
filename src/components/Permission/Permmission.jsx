

import { useState } from "react";

const Permission = (props) => {


    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    console.log('isChecked', isChecked)

    const i = [
        3, 34, 34, 434, 34, 34, 343, 434, 34, 34, 34, 343, 434, 343, 43, 2, 2, 2, 2,
        2, 3, 4, 5, 6, 6, 1, 23, 3, 4343, 343, 43, 6, 6, 1, 23, 3, 4343, 343,
    ];

    return (
        <>
            <section className="mt-24">
                <h1 className="md:text-[37px] text-[18px] text-center md:text-start text-[#1A1A1A] font-semibold py-3 px-2">
                    Edit Role Permissions : Moderator
                </h1>

                <form
                    action=""
                    className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 px-6"
                >
                    {i.map((id, index) => {
                        return (
                            <Card
                                key={index}
                                data={index}
                                handleCheckboxChange={handleCheckboxChange}
                                isChecked={isChecked}
                            />
                        );
                    })}
                </form>
            </section>
        </>
    );
};

export default Permission;

const Card = ({ isChecked, handleCheckboxChange }) => {
    return (
        <div className="flex role-card items-center justify-between p-4 bg-white shadow-2xl rounded-lg">
            <h1 className="text-[15px] font-medium">Dashboard Info</h1>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <span className="slider round" />
            </label>
        </div>
    );
};
