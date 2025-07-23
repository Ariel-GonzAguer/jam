export default function ProyectoCard({
  key,
  name,
  content,
}: {
  key: string;
  name: string;
  content?: string;
}) {

    async function generarResumen(content: string) {

    const response = await fetch(`/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content}),
    });

    const data = await response.json();
    console.log(data.output);
  }
  return (
    <li key={key} className="flex flex-col justify-center items-center p-4 border rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-[900px]">
      <h3 id="proyectoName" className="text-2xl font-semibold text-green-400 mb-4">
        {name}
      </h3>
      {content && <p className="text-gray-600 dark:text-gray-400">{content}</p>}

      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md w-2xs cursor-pointer"
      onClick={generarResumen(content.body)}> Resumir con IA</button>
    </li> 
  );
}
