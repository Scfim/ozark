import React, { useEffect, useState } from 'react'
import style from '../../styles/App.module.css'
import { Input } from '../../components/s/input'
import { BiMoney, BiNavigation, BiTime } from 'react-icons/bi'
import { Dropdown } from '../../components/s/dropdown'
import { Button } from '../../components/s/button'


const Payement = () => {

useEffect(()=>{
      var today=new Date();
      setTime(today.getHours() +':'+ today.getMinutes())       
      
},[])

    const [date ,setDate]=useState("")
    const onSetDate=(e)=>{
           setDate(e.target.value)
           console.log(time)
    }
    const [mount ,setMount]=useState("")
    const onSetMount=(e)=>{
           setMount(e.target.value)         
    }
    const [envoy ,setEnvoy]=useState("")
    const onSetEnvoy=(e)=>{
           setEnvoy(e.target.value)         
    }
    const [time ,setTime]=useState("")
   
    const [bookingState ,setBookingState]=useState("hidden")
    const [booking ,setBooking]=useState("")
    const [bookingData ,setBookingData]=useState([])
    const onSetBooking=(e)=>{
           setBooking(e.target.value)
           if(e.target.value!=""){               
               const data = [
                { bookingId: "12EC", bookingDesignation: "Garoumie", bookingDate:'21-09-2021' },
                { bookingId: "42HB", bookingDesignation: "Kapouchino", bookingDate:'01-09-2021' }
               ]
               setBookingData(data)
               setBookingState("")
           }else setBookingState("hidden")
    }

    const GetBooking=(bookingId,bookingDesignation,bookingDate)=>{                           
                console.log(bookingId,bookingDesignation,bookingDate)  
                setBookingState("hidden")  
    }

    
    const AddTransaction=()=>{
        console.log("k;jusgd;ukjds")
    }

    return <div className={` flex flex-col bg-gray-4 my-6 justify-center items-center  `}>
        <div className={` flex flex-col bg-gray-4 my-6 w-auto `}>
            <div className={` flex flex-col w-full`}>
                <label className={` text-xl font-bold`}> Transaction de paiement </label>
                {/* <label className={` text-sm font-normal ${style.text}`}>  </label> */}
            </div>
            <div className={` flex flex-col w-full mt-5`}>
                {/* <Input type="text" htmlFor="designationId" name="designation" label="Désignation" event={onSetProduct} icon={<BiNavigation size="0.95rem" />} /> */}
                <Dropdown state={bookingState} type="text" htmlFor="bookingId" name="booking" label="N° de la commande" value={booking} event={onSetBooking}>
                    {bookingData.map((value) => {
                        return <div key={value.bookingId} className={`text-xs  cursor-pointer py-1 px-2 ${style.bgHovered}`} onClick={() => GetBooking(value.bookingId, value.bookingDesignation,value.bookingDate)}>{value.bookingDesignation}</div>
                    })}
                </Dropdown>
                <Input type="date" htmlFor="dateId" name="date" label="Date de l'opération" event={onSetDate} />
                <Input type="number" htmlFor="mountId" name="mount" label="Montant payé" event={onSetMount} icon={<BiMoney size="0.95rem" />} />
                <Input type="text" htmlFor="envoyId" name="envoy" label="Envoyé" event={onSetEnvoy} icon={<BiNavigation size="0.95rem" />} />
                <Button text={'Enregistrer la Transaction'} event={() => AddTransaction()} />
            </div>
        </div>


    </div>

}

export default Payement