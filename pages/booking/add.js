import React from "react";
import {
  FaBoxes,
  FaCheckCircle,
  FaComment,
  FaDollarSign,
  FaMinus,
  FaPlusCircle,
  FaPollH,
  FaSortNumericUp,
  FaUser,
} from "react-icons/fa";
import Headers from "../../components/Headers";
import HeadSection from "../../components/HeadSection";
import TextBox from "../../components/TextBox";
import Datalist from "../../components/Datalist";
import useForm from "../../hooks/useForm";
import Button from "../../components/Button";
import { useAddBooking } from "../api/booking";

export default function add() {
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
  const onHandleAddInput = (event) => {
    event.preventDefault();
    useAddBooking({
      product,
      customer,
      comment,
      daysDate,
      quantity,
      initialPrice,
    }).then((res) => console.log(res));
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
              />
              <TextBox
                style="md:ml-1"
                event={handleChange}
                placeholder="Prix initaire"
                value={initialPrice}
                name="initialPrice"
                icon={<FaDollarSign />}
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
        <div className="col-span-4 flex justify-center my-auto h-9/12">
          <table className="table-auto w-10/12 border">
            <thead>
              <tr>
                <th className="border w-1/6">Quantité</th>
                <th className="border w-2/6">Produit</th>
                <th className="border w-1/6">Prix Unitaire</th>
                <th className="border w-1/6">Prix total</th>
                <th className="border w-1/6"></th>
              </tr>
            </thead>
            <tbody>
             
              <tr className="text-center border">
                <td className="border">45</td>
                <td className="border">Adam</td>
                <td className="border">Intro to CSS</td>
                <td className="border">858</td>
                <td className="grid place-items-center">
                  <button className="w-7 h-7 rounded focus:ring-2 focus:outline-none border-none focus:ring-red-600 bg-red-500 cursor-pointer text-white grid place-items-center">
                    <FaMinus />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
