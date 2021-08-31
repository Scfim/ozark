import React, { useCallback, useEffect, useState } from "react";
import { FaCheckCircle, FaComment, FaPollH } from "react-icons/fa";
import Headers from "../../../components/Headers";
import HeadSection from "../../../components/HeadSection";
import TextBox from "../../../components/TextBox";
import Datalist from "../../../components/Datalist";
import useForm from "../../../hooks/useForm";
import Button from "../../../components/Button";
import useIsLoggedIn from "../../../hooks/useIsLoggedIn";
import DateInput from "../../../components/DateInput";
import { getOutPuts, useAddOutPut } from "../../api/output";
import Status from "../../../components/Status";
import { usePascalCase } from "../../../hooks/usePascalCase";

export default function input() {
  const [booking, setBooking] = React.useState("");
  const [bookings, setBookings] = React.useState([]);
  const [outBookings, setOutBookings] = React.useState([]);

  const [bookingsId, setBookingsId] = React.useState([]);

  const onChangeNewQuantity = (event, currentItem) => {
    const value = event.target.value;
    const item = Object.assign({}, currentItem);
    if (parseInt(value) <= item.quantity) {
      setBookingsId([...bookingsId, item.booking_id]);
      delete item.client_name;
      delete item.client_id;
      delete item.booking_reference_id;
      delete item.booking_reference_number;
      delete item.date_record;
      const newItem = {
        ...item,
        outQuantity: parseInt(value),
      };
      setOutBookings([...outBookings, newItem]);
    } else {
      setIsStatusHidden(false);
      setStatusMessage(
        `Qunatité à retirer doit être inférieure ou égale à ${item.quantity}`
      );
      setStatusType("error");
    }
  };

  const [statusType, setStatusType] = React.useState("");
  const [isStatusHidden, setIsStatusHidden] = React.useState(true);
  const [statusMessage, setStatusMessage] = React.useState("");

  const resetStatusIsHidden = () => setIsStatusHidden(true);
  const onSearchBooking = useCallback((event) => {
    if (event.target.value !== "") {
      getOutPuts(event.target.value).then((response) => {
        setBookings(response.data);
      });
    } else setBookings([]);

    setBooking(event.target.value);
  }, []);
  useIsLoggedIn();
  const [{ comment, daysDate, quantity, initialPrice }, handleChange] = useForm(
    {
      initialPrice: "",
      quantity: "",
      daysDate: "",
      comment: "",
    }
  );
  const onHandleAddOutPut = (event) => {
    event.preventDefault();
    useAddOutPut({
      customer: bookings[0].client_name,
      customer_id: bookings[0].client_id,
      booking_reference_id: bookings[0].booking_reference_id,
      booking_reference_number: bookings[0].booking_reference_number,
      record_date: bookings[0].date_record,
      comment,
      daysDate,
      outBookings,
    }).then((res) => {
      setIsStatusHidden(false);
      setStatusMessage(res.message);
      res.type.toLowerCase() === "failure"
        ? setStatusType("error")
        : setStatusType("success");
    });
  };
  return (
    <>
      <Headers title=" Sortie Stock | Umarps Shop Manager" />
      <div className="grid h-screen place-items-center w-full mx-auto md:w-9/12">
        <div className="shadow bg-white rounded w-11/12 py-4 md:w-8/12 grid place-items-center">
          <HeadSection
            leader="Umarps Shop Manager"
            follower="Ajouter une sortie "
            showUploadPhoto={false}
            icon=""
          />
          <Status
            type={statusType}
            isHidden={isStatusHidden}
            message={statusMessage}
            resetStatusIsHidden={resetStatusIsHidden}
          />
          <form className="w-9/12 mt-5 flex flex-col justify-center">
            <Datalist
              event={onSearchBooking}
              placeholder="Commande"
              value={booking}
              name="booking"
              icon={<FaPollH />}
            >
              <div
                className={`${
                  bookings.length > 0
                    ? "flex flex-col max-h-64 rounded-b scrollBar overflow-y-auto overflow-x-hidden w-full bg-white  top-8"
                    : "hidden"
                }`}
              >
                <div className="grid place-items-center bg-white sticky top-0 p-1">
                  <span className="text-gray-800 text-2xl">
                    {bookings.length > 0 &&
                      usePascalCase(bookings[0].client_name)}
                  </span>
                </div>
                {bookings.length > 0 &&
                  bookings.map((item) => {
                    return (
                      <div
                        key={item.booking_id}
                        className="text-gray-800 border-b cursor-pointer m-2 p-1"
                      >
                        <p className="font-semibold primaryColor">
                          {item.product_name}
                        </p>
                        <div className="flex justify-between">
                          <p>
                            Quantité :{" "}
                            <span className="bg-pink-500 text-white p-1 rounded focus:outline-none focus:border-2 focus:border-pink-800">
                              {item.quantity}
                            </span>
                          </p>

                          <p>Prix: {item.unite_price} $</p>
                        </div>
                        <div className="flex justify-between mt-1">
                          <div className="flex justify-between">
                            <span>Montant à retirer :&#160;</span>
                            <input
                              onChange={(e) => onChangeNewQuantity(e, item)}
                              className="bg-pink-500 rounded text-white p-1 w-8 focus:outline-none focus:border-2 focus:border-pink-800"
                            />
                          </div>
                          <span
                            data-id={item.booking_id}
                            className={`w-6 ${
                              bookingsId.indexOf(item.booking_id) !== -1
                                ? "bg-green-500"
                                : "bg-yellow-500"
                            } h-6 shadow rounded-full p-1 `}
                          ></span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </Datalist>
            <DateInput
              type="date"
              style="md:mr-1 z-0"
              event={handleChange}
              value={daysDate}
              name="daysDate"
              placeholder="Date du jour"
            />
            <TextBox
              event={handleChange}
              placeholder="Commentaire"
              value={comment}
              name="comment"
              icon={<FaComment />}
            />
            <div className="flex justify-between ">
              <p className="mt-5 text-lg">Annuler</p>
              <Button event={onHandleAddOutPut} design="mt-3">
                <FaCheckCircle className="mt-1" />
                <span className="ml-1">Enregistrer</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
