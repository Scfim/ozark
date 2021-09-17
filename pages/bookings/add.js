import React, { useState, useEffect } from "react";
import {
  FaBoxes,
  FaComment,
  FaDollarSign,
  FaMinus,
  FaPlusCircle,
  FaPollH,
  FaPrint,
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
import validate from "../../hooks/useValidate";
import { getProduct } from "../api/product";
import Status from "../../components/Status";
import { getClients } from "../api/client";
import Checkbox from "../../components/Checkbox";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import BillHeader from "../../components/BillHeader";

export default function add() {
  useIsLoggedIn();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [productId, setProductId] = useState("");
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState("");
  const [clientId, setClientId] = useState("");
  const [bookings, setBookings] = useState([]);
  const [bookingIds, setBookingIds] = useState([]);
  const [totalOfTotal, setTotalOfTotal] = useState([]);
  const [generalTotal, setGeneralTotal] = useState(0);

  const [printFunctionReady, setPrintFunctionReady] = useState(false);

  const [isCash, setIsCash] = useState(true);
  const [allowOutPut, setAllowOutPut] = useState(true);

  const [statusType, setStatusType] = useState("");
  const [isStatusHidden, setIsStatusHidden] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");
  const [{ comment, daysDate, quantity, initialPrice }, handleChange] = useForm(
    {
      initialPrice: "",
      quantity: "",
      daysDate: "",
      comment: "",
    }
  );
  const onCheckIsCash = (event) => {
    if (event.target.checked) {
      setIsCash(true);
    } else setIsCash(false);
  };
  const onCheckAllowOutPut = (event) => {
    if (event.target.checked) {
      setAllowOutPut(true);
    } else setAllowOutPut(false);
  };
  useEffect(() => {
    const total = totalOfTotal.reduce(
      (acc, val) => parseFloat(acc) + parseFloat(val),
      0
    );
    setGeneralTotal(parseFloat(total));
  }, [bookings, totalOfTotal]);

  const resetStatusIsHidden = () => setIsStatusHidden(true);

  const onSearchProduct = (event) => {
    if (event.target.value !== "") {
      getProduct(event.target.value).then((response) => {
        response.type === "success" && setProducts(response.data);
      });
    } else setProducts([]);

    setProduct(event.target.value);
  };
  const onClickProduct = (name, id) => {
    setProduct(name);
    setProductId(id);
    setProducts([]);
  };
  const onSearchClient = (event) => {
    if (event.target.value !== "") {
      getClients(event.target.value).then((response) =>
        setClients(response.data.data)
      );
    } else setClients([]);

    setClient(event.target.value);
  };
  const onClickClient = (name, id) => {
    setClient(name);
    setClientId(id);
    setClients([]);
  };
  const onHandleAddInput = (event) => {
    event.preventDefault();
    let total = parseFloat(quantity) * parseFloat(initialPrice);
    total = parseFloat(total);
    let bookingId =
      product + quantity + client + daysDate + comment + initialPrice + total;
    bookingId = bookingId.trim();
    const newItem = {
      product,
      productId,
      client,
      clientId,
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
      validate.parse(client).not.empty() &&
      validate.parse(comment).not.empty() &&
      validate.parse(daysDate).not.empty() &&
      validate.parse(quantity).not.empty() &&
      validate.parse(initialPrice).not.empty() &&
      validate.parse(total).not.empty()
    ) {
      setBookings([...bookings, newItem]);
      setTotalOfTotal([...totalOfTotal, total]);
      setBookingIds([...bookingIds, bookingId]);
    } else {
      setIsStatusHidden(false);
      setStatusMessage("Tous les champs sont obligatoires !");
      setStatusType("error");
    }
  };
  const onSaveBookings = () => {
    useAddBooking(bookings, allowOutPut, isCash)
      .then((result) => {
        console.log(result);
        result.type === "success" && setPrintFunctionReady(true);
      })
      .catch((err) => console.info(err));
  };
  const removeBooking = (item) => {
    let nBookings = bookings.slice();
    let nBookingIds = bookingIds.slice();
    let nTotalOfTotal = totalOfTotal.slice();
    nTotalOfTotal.splice(nTotalOfTotal.indexOf(item.total), 1);
    nBookings.splice(nBookings.indexOf(item), 1);
    nBookingIds.splice(nBookingIds.indexOf(item.bookingId), 1);
    setBookings(nBookings);
    setTotalOfTotal(nTotalOfTotal);
    setBookingIds(nBookingIds);
  };
  return (
    <>
      <Headers title="Umarps Shop Manager | Enregister une commande" />
      <div className="grid h-screen grid-cols-12 w-full mx-auto">
        <div className=" md:col-span-4 h-8/12 bg-white rounded shadow my-auto py-4 grid place-items-center">
          <HeadSection
            leader="Umarps Shop Manager"
            follower="Ajouter une commande "
            showUploadPhoto={false}
            icon=""
          />
          <form className="w-9/12 mt-5 flex flex-col justify-center">
            <Datalist
              event={onSearchClient}
              placeholder="Client"
              value={client}
              name="customer"
              icon={<FaUser />}
            >
              <div
                className={`${
                  clients.length > 0
                    ? "flex flex-col w-full z-10 bg-white -left-2 top-8"
                    : "hidden"
                }`}
              >
                {clients.length > 0 &&
                  clients.map((item) => {
                    return (
                      <div
                        onClick={() =>
                          onClickClient(item.client_name, item.client_id)
                        }
                        key={item.product_id}
                        className="text-gray-800 cursor-pointer m-2 p-1"
                      >
                        <p>{item.client_name}</p>
                      </div>
                    );
                  })}
              </div>
            </Datalist>
            <Datalist
              event={onSearchProduct}
              placeholder="Produit"
              value={product}
              name="product"
              icon={<FaPollH />}
            >
              <div
                className={`${
                  products.length > 0
                    ? "flex flex-col w-full z-10 bg-white -left-2 top-8"
                    : "hidden"
                }`}
              >
                {products.length > 0 &&
                  products.map((item) => {
                    return (
                      <div
                        onClick={() =>
                          onClickProduct(item.product_name, item.product_id)
                        }
                        key={item.product_id}
                        className="text-gray-800 cursor-pointer m-2 p-1"
                      >
                        <p>{item.product_name}</p>
                      </div>
                    );
                  })}
              </div>
            </Datalist>
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
        <Status
          type={statusType}
          isHidden={isStatusHidden}
          message={statusMessage}
          resetStatusIsHidden={resetStatusIsHidden}
        />
        <div className="col-span-8 mx-3 bg-white rounded shadow flex flex-col h-fit-content justify-center">
          <div>
            <BillHeader />
            <table className="table-auto rounded w-10/12 border mt-2 mx-auto">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border w-1/5">QUANTITE</th>
                  <th className="border w-2/5">DESIGNATION</th>
                  <th className="border w-1/5">PU</th>
                  <th className="border w-1/5">PT</th>
                  {printFunctionReady === false && (
                    <th className="border w-1/5"></th>
                  )}
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
                          {printFunctionReady === false && (
                            <td className="grid place-items-center">
                              <button
                                onClick={() => removeBooking(booking)}
                                className="w-7 h-7 rounded focus:ring-2 m-1 p-1 focus:outline-none border-none focus:ring-red-600 bg-red-500 cursor-pointer text-white grid place-items-center"
                              >
                                <FaMinus />
                              </button>
                            </td>
                          )}
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col h-auto pl-4">
            <Checkbox
              label="Le client paie-t-il en cash  ?"
              event={onCheckIsCash}
              checked={isCash}
              name="cashMoney"
            />
            <Checkbox
              label="Autoriser la sortie ?"
              event={onCheckAllowOutPut}
              checked={allowOutPut}
              name="allowOutPut"
            />
          </div>
          <div
            style={{ width: "60%" }}
            className="flex h-36 ml-16 justify-between items-center"
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
            {printFunctionReady && (
              <button
                onClick={onSaveBookings}
                className="rounded flex justify-between items-center font-semibold p-2 ml-3 mt-2 bg-gray-300 text-gray-700"
              >
                <FaPrint className="mr-1" /> Imprimer
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
