const Modal = ({ selectedOrder, handleApproved, handleCanceled, handleDeleted }) => {
    // console.log('modal selectedOrder', selectedOrder.paymentMethod)
    // status canceled => approve, already canceled, delete from db button thakbe
    // status approved => already approve,  delete from db button thakbe
    // status pending => make approve, make canceled,
    console.log('selectedOrder', selectedOrder)
    return (
        <>
            {/* cash-modal-info */}
            {selectedOrder?.paymentMethod === "cash" && <div
                data-te-modal-init
                className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div
                    data-te-modal-dialog-ref
                    className="mt-32 pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                    <div
                        className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                        <div
                            className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <h5
                                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                id="exampleModalLabel">
                                Order ID : {selectedOrder?._id}
                            </h5>

                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative flex-auto p-4" data-te-modal-body-ref>
                            <p className='flex justify-between'>Screen shot (hover for zoom): <img className='h-14 w-14 mb-2 zoom_img' src={`https://boosterbd-server.onrender.com/${selectedOrder?.cashProof}`} alt="imag" /></p>
                            <hr></hr>
                            <p>Date: {selectedOrder?.createdAt}</p>


                            <p>Payment Method : {selectedOrder?.paymentMethod}</p>
                            <p>Amount : {selectedOrder?.amountToAdd} BDT</p>
                            <p>Payment For : {selectedOrder?.paymentFor}</p>
                            <hr />
                            <p>Phone Number : {selectedOrder?.phoneNumber}</p>


                        </div>
                        <div
                            className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            {selectedOrder?.status === "approved" ? <button
                                type="button"
                                className="inline-block rounded mr-6  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-orange-500 cursor-not-allowed"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Already Approved
                            </button> : <button
                                type="button"
                                className="inline-block rounded mr-6  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-orange-500 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleApproved(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Approved
                            </button>}

                            {selectedOrder?.status === "approved" && <button
                                type="button"
                                className="inline-block mr-4 rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleDeleted(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Delete from DB
                            </button>}
                            {selectedOrder?.status === "canceled" && <button
                                type="button"
                                className="inline-block mr-4 rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleDeleted(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Delete from DB
                            </button>}

                            {selectedOrder?.status === "pending" && <button
                                type="button"
                                className="inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleCanceled(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Cancel
                            </button>}

                            {selectedOrder?.status === "canceled" && <button
                                type="button"
                                className="inline-block rounded cursor-not-allowed  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Already Canceled
                            </button>}


                        </div>
                    </div>
                </div>
            </div>}

            {/* mobile-banking-modal-info */}
            {selectedOrder?.paymentMethod === "mobile-banking" && <div
                data-te-modal-init
                className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div
                    data-te-modal-dialog-ref
                    className="mt-32 pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                    <div
                        className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                        <div
                            className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <h5
                                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                id="exampleModalLabel">
                                Order ID : {selectedOrder?._id}
                            </h5>

                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative flex-auto p-4" data-te-modal-body-ref>
                            <p className='flex justify-between'>Screen shot (hover for zoom): <img className='h-14 w-14 mb-2 zoom_img' src={`https://boosterbd-server.onrender.com/${selectedOrder?.transactionScreenShot}`} alt="imag" /></p>
                            <hr></hr>
                            <p>Date: {selectedOrder?.createdAt}</p>
                            {selectedOrder?.transactionID && <p>Transaction ID : {selectedOrder?.transactionID}</p>}
                            <hr />

                            <p>Payment Method : {selectedOrder?.paymentMethod}</p>
                            <p>Amount : {selectedOrder?.amountToAdd} BDT</p>
                            <p>Payment For : {selectedOrder?.paymentFor}</p>

                            <hr />
                            <p>Payment With : {selectedOrder?.paymentWith}</p>
                            <p>Sender Number : {selectedOrder?.senderNumber}</p>
                            <p>Phone Number : {selectedOrder?.phoneNumber}</p>
                            <p>Paid To : {selectedOrder?.paidTo}</p>



                        </div>
                        <div
                            className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            {selectedOrder?.status === "approved" ? <button
                                type="button"
                                className="inline-block rounded mr-6  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-orange-500 cursor-not-allowed"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Already Approved
                            </button> : <button
                                type="button"
                                className="inline-block rounded mr-6  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-orange-500 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleApproved(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Approved
                            </button>}
                            {/* delete button. this will be deleted this order from db */}
                            {selectedOrder?.status === "approved" && <button
                                type="button"
                                className="inline-block mr-4 rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleDeleted(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Delete from DB
                            </button>}
                            {selectedOrder?.status === "canceled" && <button
                                type="button"
                                className="inline-block mr-4 rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleDeleted(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Delete from DB
                            </button>}

                            {selectedOrder?.status === "pending" && <button
                                type="button"
                                className="inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleCanceled(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Cancel
                            </button>}

                            {selectedOrder?.status === "canceled" && <button
                                type="button"
                                className="inline-block rounded cursor-not-allowed  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Already Canceled
                            </button>}


                        </div>
                    </div>
                </div>
            </div>}


            {/* internet-banking-modal-info */}
            {selectedOrder?.paymentMethod === "internet-banking" && <div
                data-te-modal-init
                className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div
                    data-te-modal-dialog-ref
                    className="mt-32 pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                    <div
                        className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                        <div
                            className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <h5
                                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                id="exampleModalLabel">
                                Order ID : {selectedOrder?._id}
                            </h5>

                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative flex-auto p-4" data-te-modal-body-ref>
                            <p className='flex justify-between'>Screen shot (hover for zoom): <img className='h-14 w-14 mb-2 zoom_img' src={`https://boosterbd-server.onrender.com/${selectedOrder?.internetBankingProof}`} alt="internetBankingProof" /></p>
                            <hr></hr>
                            <p>Date: {selectedOrder?.createdAt}</p>
                            {selectedOrder?.transactionID && <p>Transaction ID : {selectedOrder?.transactionID}</p>}
                            <hr />

                            <p>Payment Method : {selectedOrder?.paymentMethod}</p>
                            <p>Amount : {selectedOrder?.amountToAdd} BDT</p>
                            <p>Payment For : {selectedOrder?.paymentFor}</p>

                            <hr />
                            <p>Account Number : {selectedOrder?.accountNumber}</p>
                            <p>Customer Account Number : {selectedOrder?.customerAccountNumber}</p>
                            <p>Bank : {selectedOrder?.selectBank}</p>
                            <p>Phone Number : {selectedOrder?.phoneNumber}</p>



                        </div>
                        <div
                            className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            {selectedOrder?.status === "approved" ? <button
                                type="button"
                                className="inline-block rounded mr-6  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-orange-500 cursor-not-allowed"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Already Approved
                            </button> : <button
                                type="button"
                                className="inline-block rounded mr-6  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-orange-500 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleApproved(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Approved
                            </button>}
                            {/* delete button. this will be deleted this order from db */}
                            {selectedOrder?.status === "approved" && <button
                                type="button"
                                className="inline-block mr-4 rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleDeleted(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Delete from DB
                            </button>}
                            {selectedOrder?.status === "canceled" && <button
                                type="button"
                                className="inline-block mr-4 rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleDeleted(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Delete from DB
                            </button>}

                            {selectedOrder?.status === "pending" && <button
                                type="button"
                                className="inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleCanceled(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Cancel
                            </button>}

                            {selectedOrder?.status === "canceled" && <button
                                type="button"
                                className="inline-block rounded cursor-not-allowed  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Already Canceled
                            </button>}


                        </div>
                    </div>
                </div>
            </div>}

            {/* international-payment-gateway-info */}
            {selectedOrder?.paymentMethod === "international-payment-gateway" && <div
                data-te-modal-init
                className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div
                    data-te-modal-dialog-ref
                    className="mt-32 pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                    <div
                        className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                        <div
                            className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <h5
                                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                id="exampleModalLabel">
                                Order ID : {selectedOrder?._id}
                            </h5>

                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative flex-auto p-4" data-te-modal-body-ref>
                            <p className='flex justify-between'>Screen shot (hover for zoom): <img className='h-14 w-14 mb-2 zoom_img' src={`https://boosterbd-server.onrender.com/${selectedOrder?.internationalGatewayProof}`} alt="internationalGatewayProof" /></p>
                            <hr></hr>
                            <p>Date: {selectedOrder?.createdAt}</p>
                            {selectedOrder?.transactionID && <p>Transaction ID : {selectedOrder?.transactionID}</p>}
                            <hr />

                            <p>Payment Method : {selectedOrder?.paymentMethod}</p>
                            <p>Amount : {selectedOrder?.amountToAdd} BDT</p>
                            <p>Payment For : {selectedOrder?.paymentFor}</p>

                            <hr />
                            <p>Account Mail : {selectedOrder?.accountMail}</p>
                            <p>Customer Account Mail : {selectedOrder?.customerAccountMail}</p>
                            <p>Payment Gateway : {selectedOrder?.paymentGateway}</p>
                            <p>Phone Number : {selectedOrder?.phoneNumber}</p>



                        </div>
                        <div
                            className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            {selectedOrder?.status === "approved" ? <button
                                type="button"
                                className="inline-block rounded mr-6  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-orange-500 cursor-not-allowed"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Already Approved
                            </button> : <button
                                type="button"
                                className="inline-block rounded mr-6  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-orange-500 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleApproved(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Approved
                            </button>}
                            {/* delete button. this will be deleted this order from db */}
                            {selectedOrder?.status === "approved" && <button
                                type="button"
                                className="inline-block mr-4 rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleDeleted(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Delete from DB
                            </button>}
                            {selectedOrder?.status === "canceled" && <button
                                type="button"
                                className="inline-block mr-4 rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleDeleted(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Delete from DB
                            </button>}

                            {selectedOrder?.status === "pending" && <button
                                type="button"
                                className="inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => handleCanceled(selectedOrder?._id, selectedOrder?.paymentMethod)}
                            >
                                Cancel
                            </button>}

                            {selectedOrder?.status === "canceled" && <button
                                type="button"
                                className="inline-block rounded cursor-not-allowed  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-red-700 "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Already Canceled
                            </button>}


                        </div>
                    </div>
                </div>
            </div>}

        </>
    );
};


export default Modal