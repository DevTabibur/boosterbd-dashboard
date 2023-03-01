
import React, { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import JoditEditor from "jodit-react"

const AddServices = () => {
    const [productDescription, setProductDescription] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [show, setShow] = useState(false);
    const [showSearch, setSearch] = useState(false);
    const [serviceTypeChecked, setServiceTypeChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const editor1 = useMemo(
        () => (
            <JoditEditor
                value={productDescription}
                onChange={(newContent) => setProductDescription(newContent)}
            />
        ),
        []
    );
    const editor2 = useMemo(
        () => (
            <JoditEditor
                value={metaDescription}
                onChange={(newContent) => setMetaDescription(newContent)}
            />
        ),
        []
    );

    const onSubmit = async (data, e) => {
        console.log(data);

        const formData = new FormData();
        formData.append("serviceName", data.serviceName);
        formData.append("serviceType", data.serviceTypeChecked);
        formData.append("itemPrice", data.itemPrice);
        formData.append("discountPrice", data.discountPrice);
        formData.append("itemCode", data.itemCode);
        formData.append("category", data.category);
        formData.append("subCategory", data.subCategory);
        formData.append("galleryImage", data.galleryImage[0]);
        formData.append("thumbnailImage", data.thumbnailImage[0]);
        formData.append("productDescriptionFile", data.productDescriptionFile[0]);
        formData.append("tags", data.tags);
        formData.append("metaTag", data.metaTag);

        formData.append("productDescription", productDescription);
        formData.append("metaDescription", metaDescription);

        const img = data.galleryImage[0];
        const validExt = ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"];

        if (img !== "") {
            // checking image extension
            // imageName.jpeg
            const pos_of_dot = img.name.lastIndexOf(".") + 1;
            const img_ext = img.name.substring(pos_of_dot);
            const result = validExt.includes(img_ext);

            if (result === false) {
                Swal.fire({
                    title: "Only jpg, png and jpeg files are allowed",
                    icon: "warning",
                });
                return false;
            }
            // checking image size
            else {
                if (parseFloat(img.size / (1024 * 1024)) >= 5) {
                    // perform operation
                    Swal.fire({
                        title: "File Size must be smaller than 5MB",
                        icon: "warning",
                    });
                    return false;
                } else {
                    console.log("everything is perfect");
                    // everything is perfect
                    const url = `http://localhost:5000/api/v1/products/add-service`;
                    // fetch(url, {`;
                    fetch(url, {
                        method: "POST",
                        headers: {
                            // "content-type": "application/json",
                            // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        },
                        body: formData,
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log("data posted", data);
                            if (data.code === 400) {
                                Swal.fire({
                                    title: data?.message,
                                    text: data?.error,
                                    icon: "error",
                                });
                            } else {
                                Swal.fire({
                                    title: data.status,
                                    text: data?.message,
                                    icon: "success",
                                });
                                reset();
                                // window.location.reload();
                            }
                        });
                }
            }
        } else {
            alert("No Image is selected");
            return false;
        }

        // const url = `http://localhost:5000/api/v1/products/add-service`;
        // fetch(url, {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        //   },
        //   body: formData,
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log("add service data posted", data);
        //   });
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const handleServiceType = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <>
            <div className="container mx-auto mt-24 bg-[#D9D9D9] p-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* service name */}
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="col-span-2 bg-white rounded shadow p-2">
                            <h1 className="text-xl font-medium mb-4">Service Name</h1>
                            <hr />
                            <div className="flex justify-between m-4">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    Service Name
                                </h3>
                                <div className=" xl:w-96">
                                    <input
                                        type="text"
                                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 focus:bg-white  focus:outline-none"
                                        {...register("serviceName", {
                                            required: {
                                                value: true,
                                                message: "Service Name is Required",
                                            },
                                        })}
                                    />
                                    <label className="flex justify-between items-center mb-6">
                                        {errors.serviceName?.type === "required" && (
                                            <span className="label-text-alt text-red-600 ">
                                                {errors.serviceName.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded shadow p-2">
                            <h1 className="text-xl font-medium mb-4">Featured</h1>
                            <hr></hr>
                            <div className="m-4 flex justify-between">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    Status
                                </h3>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className="slider round" />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* service type */}
                    <div className="grid md:grid-cols-3 gap-4 my-4">
                        <div className="lg:col-span-2 sm:col-span-1 bg-white rounded shadow p-2">
                            <h1 className="text-xl font-medium mb-4">Service Type</h1>
                            <hr />
                            <div className="md:flex justify-between m-4">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    Service Type
                                </h3>

                                <div className="m-4 flex justify-between border p-4">
                                    <h3 className=" font-semibold text-[#494747] my-auto mr-4">
                                        Digital Product
                                    </h3>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={serviceTypeChecked}
                                            onChange={handleServiceType}
                                        />
                                        <span className="slider round" />
                                    </label>
                                </div>
                                <div className="m-4 flex justify-between border p-4">
                                    <h3 className=" font-semibold text-[#494747] my-auto mr-4">
                                        Subscription
                                    </h3>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={handleServiceType}
                                        />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-1 lg:col-span-1 bg-white rounded shadow p-2">
                            <h1 className="text-xl font-medium mb-4">Todays Deal</h1>
                            <hr></hr>
                            <div className="m-4 flex justify-between">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    Status
                                </h3>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className="slider round" />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* price*/}
                    <div className="grid md:grid-cols-3 gap-4 my-4">
                        <div className="col-span-2 bg-white rounded shadow p-2">
                            <h1 className="text-xl font-medium mb-4">Price</h1>
                            <hr />
                            <div className="flex justify-between m-4">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    Item Price
                                </h3>
                                <div className=" xl:w-96">
                                    <input
                                        type="number"
                                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 focus:bg-white  focus:outline-none"
                                        {...register("itemPrice", {
                                            required: {
                                                value: true,
                                                message: "Item Price is required",
                                            },
                                            pattern: {
                                                value:
                                                    /^(?!(?:^[-+]?[0.]+(?:[Ee]|$)))(?!(?:^-))(?:(?:[+-]?)(?=[0123456789.])(?:(?:(?:[0123456789]+)(?:(?:[.])(?:[0123456789]*))?|(?:(?:[.])(?:[0123456789]+))))(?:(?:[Ee])(?:(?:[+-]?)(?:[0123456789]+))|))$/,
                                                message: "Only positive number contains",
                                            },
                                        })}
                                    />
                                    <label className="flex justify-between items-center mb-6">
                                        {errors.itemPrice?.type === "required" && (
                                            <span className="label-text-alt text-red-600 ">
                                                {errors.itemPrice.message}
                                            </span>
                                        )}
                                        {errors.itemPrice?.type === "pattern" && (
                                            <span className="label-text-alt text-red-600 ">
                                                {errors.itemPrice.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-between m-4">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    Discount Price
                                </h3>
                                <div className=" xl:w-96">
                                    <input
                                        type="number"
                                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 focus:bg-white  focus:outline-none"
                                        {...register("discountPrice", {
                                            required: {
                                                value: true,
                                                message: "Discount Price is required",
                                            },
                                            pattern: {
                                                value:
                                                    /^(?!(?:^[-+]?[0.]+(?:[Ee]|$)))(?!(?:^-))(?:(?:[+-]?)(?=[0123456789.])(?:(?:(?:[0123456789]+)(?:(?:[.])(?:[0123456789]*))?|(?:(?:[.])(?:[0123456789]+))))(?:(?:[Ee])(?:(?:[+-]?)(?:[0123456789]+))|))$/,
                                                message: "Only positive number contains",
                                            },
                                        })}
                                    />
                                    <label className="flex justify-between items-center mb-6">
                                        {errors.discountPrice?.type === "required" && (
                                            <span className="label-text-alt text-red-600 ">
                                                {errors.discountPrice.message}
                                            </span>
                                        )}
                                        {errors.discountPrice?.type === "pattern" && (
                                            <span className="label-text-alt text-red-600 ">
                                                {errors.discountPrice.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-between m-4">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    Item Code
                                </h3>
                                <div className=" xl:w-96">
                                    <input
                                        type="text"
                                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 focus:bg-white  focus:outline-none"
                                        {...register("itemCode", {
                                            required: {
                                                value: true,
                                                message: "Item Code is required",
                                            },
                                        })}
                                    />
                                    <label className="flex justify-between items-center mb-6">
                                        {errors.itemCode?.type === "required" && (
                                            <span className="label-text-alt text-red-600 ">
                                                {errors.itemCode.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* category*/}
                    <div className="grid md:grid-cols-3 gap-4 my-4">
                        <div className="col-span-2 bg-white rounded shadow p-2">
                            <h1 className="text-xl font-medium mb-4">Category</h1>
                            <hr />
                            <div className="flex justify-between m-4">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    Category
                                </h3>
                                <div className=" xl:w-96">
                                    <input
                                        type="text"
                                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 focus:bg-white  focus:outline-none"
                                        {...register("category", {
                                            required: {
                                                value: true,
                                                message: "Category is required",
                                            },
                                        })}
                                    />
                                    <label className="flex justify-between items-center mb-6">
                                        {errors.category?.type === "required" && (
                                            <span className="label-text-alt text-red-600 ">
                                                {errors.category.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-between m-4">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    Sub Category
                                </h3>
                                <div className=" xl:w-96">
                                    <input
                                        type="text"
                                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 focus:bg-white  focus:outline-none"
                                        {...register("subCategory")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product  image*/}
                    <div className="grid md:grid-cols-3 gap-4 my-4">
                        <div className="col-span-2 bg-white rounded shadow p-2">
                            <h1 className="text-xl font-medium mb-4">Product Image</h1>
                            <hr />
                            <div className="flex justify-between m-4">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    Gallery Image (600×600)
                                </h3>
                                <div className=" xl:w-96">
                                    <input
                                        type="file"
                                        name="galleryImage"
                                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 focus:bg-white  focus:outline-none"
                                        {...register("galleryImage", {
                                            required: {
                                                value: true,
                                                message: "Gallery image is required",
                                            },
                                        })}
                                    />
                                    <label className="flex justify-between items-center mb-6">
                                        {errors.galleryImage?.type === "required" && (
                                            <span className="label-text-alt text-red-600 ">
                                                {errors.galleryImage.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-between m-4">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    Thumbnail Image (300×300)
                                </h3>
                                <div className=" xl:w-96">
                                    <input
                                        type="file"
                                        name="thumbnailImage"
                                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 focus:bg-white  focus:outline-none"
                                        {...register("thumbnailImage", {
                                            required: {
                                                value: true,
                                                message: "Thumbnail image is required",
                                            },
                                        })}
                                    />
                                    <label className="flex justify-between items-center mb-6">
                                        {errors.thumbnailImage?.type === "required" && (
                                            <span className="label-text-alt text-red-600 ">
                                                {errors.thumbnailImage.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product  description*/}
                    <div className="grid md:grid-cols-3 gap-4 my-4">
                        <div className="col-span-2 bg-white rounded shadow p-2">
                            <h1 className="text-xl font-medium mb-4">
                                Product Description
                            </h1>
                            <hr />
                            <div className="flex justify-between m-4">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    PDF Specification
                                </h3>
                                <div className="w-full">{editor1}</div>
                            </div>
                        </div>
                    </div>

                    {/* Product  description File*/}
                    <div className="grid md:grid-cols-3 gap-4 my-4">
                        <div className="col-span-2 bg-white rounded shadow p-2">
                            <h1 className="text-xl font-medium mb-4">
                                Product Description
                            </h1>
                            <hr />
                            <div className="flex justify-between m-4">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    PDF Specification
                                </h3>
                                <div className=" xl:w-96">
                                    <div className=" xl:w-96">
                                        <input
                                            type="file"
                                            name="productDescriptionFile"
                                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 focus:bg-white  focus:outline-none"
                                            {...register("productDescriptionFile")}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* tags*/}
                    <div className="grid md:grid-cols-3 gap-4 my-4">
                        <div className="col-span-2 bg-white rounded shadow p-2">
                            <h1 className="text-xl font-medium mb-4">Tags</h1>
                            <hr />
                            <div className="flex justify-between m-4">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    Tags
                                </h3>
                                <div className=" xl:w-96">
                                    <div className=" xl:w-96">
                                        <input
                                            type="text"
                                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 focus:bg-white  focus:outline-none"
                                            {...register("tags")}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Meta tags*/}
                    <div className="grid md:grid-cols-3 gap-4 my-4">
                        <div className="col-span-2 bg-white rounded shadow p-2">
                            <h1 className="text-xl font-medium mb-4">Meta Tag</h1>
                            <hr />
                            <div className="flex justify-between m-4">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    Meta Tag
                                </h3>
                                <div className=" xl:w-96">
                                    <div className=" xl:w-96">
                                        <input
                                            type="text"
                                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 focus:bg-white  focus:outline-none"
                                            {...register("metaTag", {
                                                required: {
                                                    value: true,
                                                    message: "Meta Tag is required",
                                                },
                                            })}
                                        />
                                        <label className="flex justify-between items-center mb-6">
                                            {errors.metaTag?.type === "required" && (
                                                <span className="label-text-alt text-red-600 ">
                                                    {errors.metaTag.message}
                                                </span>
                                            )}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Meta  description*/}
                    <div className="grid md:grid-cols-3 gap-4 my-4">
                        <div className="col-span-2 bg-white rounded shadow p-2">
                            <h1 className="text-xl font-medium mb-4">
                                Meta Description
                            </h1>
                            <hr />
                            <div className="flex justify-between m-4">
                                <h3 className=" font-semibold text-[#494747] my-auto">
                                    PDF Specification
                                </h3>
                                <div className=" w-full">{editor2}</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 my-4">
                        <input
                            className="btn px-12 py-4 rounded bg-[#8756EF] text-white font-medium"
                            type="submit"
                            value="ADD SERVICE"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddServices;
