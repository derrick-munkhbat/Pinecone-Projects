export function Chip(props) {
  const { label } = props;

  return (
    <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
      {label}
    </div>
  );
}
