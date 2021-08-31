import React, { useEffect, useState } from 'react'
import style from '../../styles/App.module.css'
import { Input } from '../../components/s/input'
import { BiMoney, BiNavigation } from 'react-icons/bi'
import { Dropdown } from '../../components/s/dropdown'
import { Button } from '../../components/s/button'
import useIsLoggedIn from '../../hooks/useIsLoggedIn'
import {getBooking} from '../api/payement'


const Payement = () => {
    useIsLoggedIn()

    useEffect(() => {


        var today = new Date();
        setTime(today.getHours() + ':' + today.getMinutes())

    }, [])

    const [date, setDate] = useState("")
    const onSetDate = (e) => {
        setDate(e.target.value)
        console.log(time)
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

    const [bookingState, setBookingState] = useState("hidden")
    const [booking, setBooking] = useState("")
    const [bookingData, setBookingData] = useState([])
    const onSetBooking = async(e) => {
        setBooking(e.target.value)
        if (e.target.value != "") {
            await getBooking({bookingNumber: e.target.value}).then((response) =>{
                    console.log(response)
            })
            // setBookingData(data)
            setBookingState("")
        } else setBookingState("hidden")
    }


    const [bookingId, setBookingId] = useState("")
    const GetBooking = (bookingId, bookingDesignation, bookingDate) => {
        setBookingId(bookingId)
        setBooking(bookingDesignation)
        setBookingState("hidden")
    }


    const AddPayement = () => {
        console.log("63119d9d-45ad-42e5-8022-935e9458a88c", date, time, mount, envoy)
        // console.log(bookingId, date, time, mount, envoy)
    }

    return <div className={`flex flex-col my-6`} >
        <div className={` flex flex-col w-full mx-14`}>
            <label className={` text-xl font-bold`}> Transaction de paiement </label>
        </div>

        <div className=" flex mx-14 my-8" >
            <div className="flex">
                <div className="flex flex-col bg-white shadow-md rounded-md p-4  ">
                    <Dropdown state={bookingState} type="text" htmlFor="bookingId" name="booking" label="N° de la commande" value={booking} event={onSetBooking}>
                        {bookingData != undefined && bookingData != null ? bookingData.map((value) => {
                            return <div key={value.bookingId} className={`text-xs  cursor-pointer py-1 px-2 ${style.bgHovered}`} onClick={() => GetBooking(value.bookingId, value.bookingDesignation, value.bookingDate)}>{value.bookingDesignation}</div>
                        }) : setBookingData([])}
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