import { useState } from "react";
import Resumen from "./Resumen";

export default function ProyectoCard({
  key,
  name,
  content,
}: {
  key: string;
  name: string;
  content?: string;
}) {
  const [resumen, setResumen] = useState<string>("");
  const [estado, setEstado] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  async function generarResumen(input: string) {
    setLoading(true);
    const response = await fetch(`/api/openAI_Service`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    const data = await response.json();
    console.log(data.output);
    setResumen(data.output);
    setEstado(true);
  }

  return (
    <>
      <li
        key={key}
        className="flex flex-col justify-center items-center p-4 border rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-[900px]"
      >
        <h3
          id="proyectoName"
          className="text-2xl font-semibold text-green-400 mb-4"
        >
          {name}
        </h3>
        {content && (
          <p className="text-gray-600 dark:text-gray-400">{content}</p>
        )}

        <button
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md w-2xs cursor-pointer"
          onClick={() => generarResumen(content ? content : "")}
        >
          {" "}
          Resumir con IA
        </button>
      </li>

      {loading && !resumen && (
        <p className="text-gray-600 dark:text-gray-400">Generando resumen...</p>
      )}

      <Resumen
        texto={resumen}
        estado={estado}
        funcion={() => {
          setResumen("");
          setEstado(false);
        }}
      />
    </>
  );
}
