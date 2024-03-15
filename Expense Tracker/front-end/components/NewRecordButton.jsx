export function NewRecordButton() {
  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <button
      onClick={toggleModal}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add New Record
    </button>
  );
}
