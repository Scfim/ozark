import React from "react";
import {
  FaBoxes,
  FaCheckCircle,
  FaComment,
  FaDollarSign,
  FaPollH,
} from "react-icons/fa";
import Headers from "../../components/Headers";
import HeadSection from "../../components/HeadSection";
import TextBox from "../../components/TextBox";
import Datalist from "../../components/Datalist";
import useForm from "../../hooks/useForm";
import Button from "../../components/Button";
import { getProduct } from "../api/product";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import DateInput from "../../components/DateInput";
import { useAddOutPut } from "../api/output";
import Status from "../../components/Status";

export default function input() {
  const [product, setProduct] = React.useState("");
  const [productId, setProductId] = React.useState("");
  const [products, setProducts] = React.useState([]);

  const [statusType, setStatusType] = React.useState("");
  const [isStatusHidden, setIsStatusHidden] = React.useState(true);
  const [statusMessage, setStatusMessage] = React.useState("");

  const resetStatusIsHidden = () => setIsStatusHidden(true);
  const onSearchProduct = (event) => {
    if (event.target.value !== "") {
      getProduct(event.target.value).then((response) =>
        setProducts(response.data.data)
      );
    } else setProducts([]);

    setProduct(event.target.value);
  };
  const onClickProduct = (name, id) => {
    setProduct(name);
    setProductId(id);
    setProducts([]);
  };
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
      product: productId,
      comment,
      daysDate,
      quantity,
      initialPrice,
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
              event={onSearchProduct}
              placeholder="Produit"
              value={product}
              name="product"
              icon={<FaPollH />}
              options={products}
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
            <DateInput
              type="date"
              style="md:mr-1"
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
