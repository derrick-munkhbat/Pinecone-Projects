
import { Form } from "./components/Form";
import { useState } from "react";
import { LeftBar } from "./components/LeftBar";
import { RightBar } from "./components/RightBar";

export default function Home() {
  const [isShowModal, setIsShowModal] = useState(false);
  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <div className="flex p-5">
      <div>
        <LeftBar/>
      </div>

      <div>
        <RightBar/>
      </div>

      {/* FORM */}
      <div className="absolute inset-0">
        {isShowModal && <Form />}
      </div>
     
    </div>
  );
}
