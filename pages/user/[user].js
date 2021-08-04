import React from "react";
import { useRouter } from "next/router";
import getUuidFromURL from "../../hooks/useGetUuid";

export default function user() {
  const router = useRouter();
  const { user } = router.query;
 // const uuid = getUuidFromURL(window.location.href)
  return <div className="">

  </div>;
}
