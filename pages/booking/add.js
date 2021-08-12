import React, { useState, useEffect } from "react";
import {
  FaBoxes,
  FaComment,
  FaDollarSign,
  FaMinus,
  FaPlusCircle,
  FaPollH,
  FaSave,
  FaUser,
} from "react-icons/fa";
import Headers from "../../components/Headers";
import HeadSection from "../../components/HeadSection";
import TextBox from "../../components/TextBox";
import Datalist from "../../components/Datalist";
import useForm from "../../hooks/useForm";
import Button from "../../components/Button";
import { useAddBooking } from "../api/booking";
import useArrayContainsObject from "../../hooks/useArrayContainsObject";
import validate from "../../hooks/useValidate";

export default function add() {
  const [bookings, setBookings] = useState([]);
  const [bookingIds, setBookingIds] = useState([]);
  const [totalOfTotal, setTotalOfTotal] = useState([]);
  const [generalTotal, setGeneralTotal] = useState(0);
  const [
    { product, customer, comment, daysDate, quantity, initialPrice },
    handleChange,
  ] = useForm({
    customer: "",
    product: "",
    initialPrice: "",
    quantity: "",
    daysDate: "",
    comment: "",
  });
  useEffect(() => {
    console.log(bookings);
    const total = totalOfTotal.reduce(
      (acc, val) => parseFloat(acc) + parseFloat(val),
      0
    );
    setGeneralTotal(parseFloat(total));
  }, [bookings, totalOfTotal]);
  const onHandleAddInput = (event) => {
    event.preventDefault();
    let total = parseFloat(quantity) * parseFloat(initialPrice);
    total = parseFloat(total);
    let bookingId =
      product + quantity + customer + daysDate + comment + initialPrice + total;
    bookingId = bookingId.trim();
    const newItem = {
      product,
      customer,
      comment,
      daysDate,
      quantity,
      initialPrice,
      total,
      bookingId,
    };
    if (
      !bookingIds.includes(bookingId) &&
      validate.parse(product).not.empty() &&
      validate.parse(customer).not.empty() &&
      validate.parse(comment).not.empty() &&
      validate.parse(daysDate).not.empty() &&
      validate.parse(quantity).not.empty() &&
      validate.parse(initialPrice).not.empty() &&
      validate.parse(total).not.empty()
    ) {
      setBookings([...bookings, newItem]);
      setTotalOfTotal([...totalOfTotal, total]);
      setBookingIds([...bookingIds, bookingId]);
    }
  };
  const onSaveBookings = () => {
    useAddBooking(bookings)
      .then((booking) => {})
      .catch((err) => console.info(err));
  };
  const removeBooking = (item) => {
    console.log(item);
    let nBookings = bookings.slice()
    let nBookingIds = bookingIds.slice()
    let nTotalOfTotal = totalOfTotal.slice()
    nTotalOfTotal.splice(nTotalOfTotal.indexOf(item.total),1)
    nBookings.splice(nBookings.indexOf(item), 1)
    nBookingIds.splice(nBookingIds.indexOf(item.bookingId),1)
    setBookings(nBookings);
    setTotalOfTotal(nTotalOfTotal);
    setBookingIds(nBookingIds);
  };
  return (
    <>
      <Headers title="Umarps Shop Manager | Enregister une commande" />
      <div className="grid h-screen my-auto grid-cols-6 w-full mx-auto">
        <div className=" md:col-span-2 h-2/3 my-auto py-4 grid place-items-center">
          <HeadSection
            leader="Umarps Shop Manager"
            follower="Ajouter une commande "
            showUploadPhoto={false}
            icon=""
          />
          <form className="w-9/12 mt-5 flex flex-col justify-center">
            <Datalist
              event={handleChange}
              placeholder="Client"
              value={customer}
              name="customer"
              icon={<FaUser />}
            />
            <Datalist
              event={handleChange}
              placeholder="Produit"
              value={product}
              name="product"
              icon={<FaPollH />}
            />
            <div className="md:flex justify-between ">
              <TextBox
                style="md:mr-1"
                event={handleChange}
                placeholder="Quantité"
                value={quantity}
                name="quantity"
                icon={<FaBoxes />}
                type="number"
              />
              <TextBox
                style="md:ml-1"
                event={handleChange}
                placeholder="Prix initaire"
                value={initialPrice}
                name="initialPrice"
                icon={<FaDollarSign />}
                type="number"
              />
            </div>
            <TextBox
              type="date"
              style="md:mr-1"
              event={handleChange}
              value={daysDate}
              name="daysDate"
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
              <Button event={onHandleAddInput} design="mt-3">
                <FaPlusCircle className="mt-1" />
                <span className="ml-1">Ajouter</span>
              </Button>
            </div>
          </form>
        </div>
        <div className="col-span-4 flex flex-col justify-center my-auto h-9/12">
          <table className="table-auto rounded w-10/12 border">
            <thead>
              <tr className="bg-blue-50">
                <th className="border w-1/6">Quantité</th>
                <th className="border w-2/6">Produit</th>
                <th className="border w-1/6">Prix Unitaire</th>
                <th className="border w-1/6">Prix total</th>
                <th className="border w-1/6"></th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0
                ? bookings.map((booking) => {
                    return (
                      <tr
                        key={booking.bookingId}
                        className="text-center border"
                      >
                        <td className="border">{booking.quantity}</td>
                        <td className="border">{booking.product}</td>
                        <td className="border">{booking.initialPrice}</td>
                        <td className="border">{booking.total.toFixed(3)}</td>
                        <td className="grid place-items-center">
                          <button
                            onClick={() => removeBooking(booking)}
                            className="w-7 h-7 rounded focus:ring-2 m-1 p-1 focus:outline-none border-none focus:ring-red-600 bg-red-500 cursor-pointer text-white grid place-items-center"
                          >
                            <FaMinus />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
          <div
            style={{ width: "40%" }}
            className="flex h-36 justify-between items-center"
          >
            <div className="w-36 p-2 rounded border flex mr-5 items-center h-10 mt-2">
              <p>
                <span className="font-semibold">Total</span> :{" "}
                {generalTotal.toFixed(3)} $
              </p>
            </div>
            <Button event={onSaveBookings} design="w-36 p-2 mt-2 ml-3">
              <FaSave className="mr-1" /> Enregistrer
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
