export default function Resumen({
  texto,
  estado,
  funcion,
}: {
  texto: string;
  estado: boolean;
  funcion: () => void;
}) {
  return (
    <div
      className={`w-[600px] mt-4 p-4 border rounded-md shadow-sm bg-gray-50 ${
        estado === false ? "hidden" : "z-10"
      }`}
    >
      <h4 className="font-semibold mb-2 text-black">Resumen:</h4>
      <p className="text-black">{texto}</p>
      <button
        className="mt-2 px-4 py-2 bg-red-400 text-black font-extrabold rounded-md"
        onClick={funcion}
      >
        Cerrar
      </button>
    </div>
  );
}
