import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { useGlobalContext } from '~/modules/gcontext';

export default function About({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) {
    //let [isOpen, setIsOpen] = useState(true)
    const { profile } = useGlobalContext();

    return (
        <>
            <Dialog open={isOpen} className="relative z-10 focus:outline-none shadow-xl shadow-red-200" onClose={() => { setIsOpen(false) }}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md bg-background p-6 backdrop-blur-2xl shadow-lg shadow-black"
                        >
                            <DialogTitle as="h3" className="text-base font-bold text-textPrimary bg-button">
                                About imaGine
                            </DialogTitle>
                            <p className="mt-2 text-sm/6 text-textPrimary">
                                <table className="font-medium">
                                    <tr><td>Company : </td><td >Teen Telecommunication Pvt. Ltd.</td></tr>
                                    <tr><td>Product Developer : </td><td >Saurav</td></tr>
                                    <tr><td>Product Consultant : </td><td >Gunjan</td></tr>
                                    <tr><td>Version : </td><td >1.1.0</td></tr>
                                </table>
                            </p>
                            <button
                                className=" mt-4 inline-flex items-center gap-2 bg-button text-buttonTextPrimary px-3 py-1.5 text-sm/6 font-semibold focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                                onClick={() => { setIsOpen(false); }}
                            >
                                {profile.username === "gunjan" ? "OKIE" : "Close"}
                            </button>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog >
        </>
    )
}