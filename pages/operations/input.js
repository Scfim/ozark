import React, { useState } from "react";
import Status from "../../components/Status";
import {
  FaBoxes,
  FaCheckCircle,
  FaComment,
  FaDollarSign,
  FaPollH,
  FaUser,
} from "react-icons/fa";
import Headers from "../../components/Headers";
import HeadSection from "../../components/HeadSection";
import TextBox from "../../components/TextBox";
import Datalist from "../../components/Datalist";
import useForm from "../../hooks/useForm";
import Button from "../../components/Button";
import { useAddInput } from "../api/inputs";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import { getProvider } from "../api/provider";
import { getProduct } from "../api/product";

export default function input() {
  const [providers, setProviders] = useState([]);
  const [products, setProducts] = useState([]);
  const [statusType, setStatusType] = useState("");
  const [isStatusHidden, setIsStatusHidden] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");
  const resetStatusIsHidden = () => setIsStatusHidden(true);
  const [provider, setProvider] = useState("");
  const [providerId, setProviderId] = useState("");
  const [product, setProduct] = useState("");
  const [productId, setProductId] = useState("");

  const onSearchProvider = (event) => {
    if (event.target.value !== "") {
      getProvider(event.target.value).then((response) =>
        setProviders(response.data.data)
      );
    } else setProviders([]);

    setProvider(event.target.value);
  };
  const onClickProvider = (name, id) => {
    setProvider(name);
    setProviderId(id);
    setProviders([]);
  };
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
      product: "",
      initialPrice: "",
      quantity: "",
      daysDate: "",
      comment: "",
    }
  );
  const onHandleAddInput = (event) => {
    event.preventDefault();
    useAddInput({
      product:productId,
      provider,
      comment,
      daysDate,
      quantity,
      initialPrice,
      provider: providerId,
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
      <Headers title="Entrée Stock | Umarps Shop Manager" />
      <div className="grid h-screen place-items-center w-full mx-auto md:w-9/12">
        <div className=" shadow bg-white rounded w-11/12 py-4 md:w-8/12 grid place-items-center">
          <HeadSection
            leader="Umarps Shop Manager"
            follower="Ajouter une entrée "
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
              event={onSearchProvider}
              placeholder="Fournisseur (falcultatif)"
              value={provider}
              icon={<FaUser />}
            >
              <div
                className={`${
                  providers.length > 0
                    ? "flex flex-col w-full z-10 bg-white -left-2 top-8"
                    : "hidden"
                }`}
              >
                {providers.length > 0 &&
                  providers.map((item) => {
                    return (
                      <div
                        onClick={() =>
                          onClickProvider(item.provider_name, item.provider_id)
                        }
                        key={item.provider_id}
                        className="text-gray-800 cursor-pointer m-2 p-1"
                      >
                        <p>{item.provider_name}</p>
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
