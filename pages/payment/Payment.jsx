import React, { useEffect, useState } from 'react'
import style from '../../styles/App.module.css'
import { Input } from '../../components/s/input'
import { BiMoney, BiNavigation } from 'react-icons/bi'
import { Dropdown } from '../../components/s/dropdown'
import { Button } from '../../components/s/button'
import useIsLoggedIn from '../../hooks/useIsLoggedIn'
import { getBooking, addPayement } from '../api/payement'
import Status from "../../components/Status";

const Payement = () => {
    useIsLoggedIn()

    useEffect(() => {


        var today = new Date();
        setTime(today.getHours() + ':' + today.getMinutes())

    }, [])

    const [date, setDate] = useState("")
    const onSetDate = (e) => {
        setDate(e.target.value)
    }
    const [mount, setMount] = useState("")
    const onSetMount = (e) => {
        setMount(e.target.value)
    }
    const [envoy, setEnvoy] = useState("")
    const onSetEnvoy = (e) => {
        setEnvoy(e.target.value)
    }
    const [time, setTime] = useState("")

    const resetStatusIsHidden = () => setIsStatusHidden(true);
    const [statusType, setStatusType] = useState("");
    const [isStatusHidden, setIsStatusHidden] = useState(true);
    const [statusMessage, setStatusMessage] = useState("");


    const [bookingState, setBookingState] = useState("hidden")
    const [booking, setBooking] = useState("")
    const [bookingData, setBookingData] = useState([])
    const onSetBooking = (e) => {
        setBooking(e.target.value)
        if (e.target.value != "") {
            getBooking({ bookingNumber: e.target.value }).then((response) => {
                setBookingData(response.data)
                console.log(response)

                var totalPay = 0
                for (var i = 0; i < response.data.length; i++) {
                    totalPay = totalPay + response.data[i].quantity * response.data[i].unite_price
                    setTotal(totalPay)
                }

            })
            setBookingState("")
        } else setBookingState("hidden")
    }


    const [bookingId, setBookingId] = useState("")
    const GetBooking = (bookingRefID) => {
        setBookingId(bookingRefID)
        setBookingState("hidden")

    }


    const AddPayement = async () => {
        await addPayement({
            referenceId: bookingId,
            dateRecord: date,
            mount: mount,
            envoy: envoy
        }).then((res) => {
            setIsStatusHidden(false);
            setStatusMessage(res.data.message);
            console.log(res.data);
            if (res.data.type.toLowerCase() === "success") setStatusType("success")
            else {

                setStatusType("error")
                setStatusMessage(res.data.message);
            }

        })

    }

    const [total, setTotal] = useState(100)
    return <div className={`flex flex-col my-6`} >
        <div className={` flex flex-col w-full mx-14`}>
            <label className={` text-xl font-bold`}> Transaction de paiement </label>
        </div>
        <Status type={statusType} isHidden={isStatusHidden} message={statusMessage} resetStatusIsHidden={resetStatusIsHidden} />

        <div className=" flex mx-14 my-8" >
            <div className="flex">
                <div className="flex flex-col bg-white shadow-md rounded-md p-4  ">
                    <Dropdown state={bookingState} type="text" htmlFor="bookingId" name="booking" label="N° de la commande" value={booking} event={onSetBooking}>
                        {
                            bookingData != undefined && bookingData != null ? bookingData.map((value) => {
                                return <div key={value.booking_id} className={`text-xs  cursor-pointer py-1 px-2 ${style.bgHovered}`} onClick={() => GetBooking(value.booking_reference_id)}>
                                    <div className={`flex`}>
                                        <label className={`pr-3`} >{value.client_name}</label>
                                        <label className={`pr-3`} >{value.product_name}</label>
                                        <label className={`pr-3`} >{value.date_record}</label>
                                        <label className={`pr-3`} >{value.quantity * value.unite_price}</label>
                                    </div>
                                </div>
                            },
                            ) : setBookingData([])
                        }
                        <div className="flex rounded-md bg-gray-600 p-2 m-2 text-white">
                            <label className={`px-2 `} >{`Total à payer : `}</label>
                            <label className={`px-2 font-bold`} >{`${total} $`}</label>
                        </div>
                    </Dropdown>
                    <Input type="date" htmlFor="dateId" name="date" label="Date de l'opération" event={onSetDate} />
                    <Input type="number" htmlFor="mountId" name="mount" label="Montant payé" event={onSetMount} icon={<BiMoney size="0.95rem" />} />
                    <Input type="text" htmlFor="envoyId" name="envoy" label="Envoyé" event={onSetEnvoy} icon={<BiNavigation size="0.95rem" />} />
                    <Button text={'Enregistrer la Transaction'} event={() => AddPayement()} />
                </div>
            </div>
        </div>
    </div>

}

export default Payement