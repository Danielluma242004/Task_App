import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-slate-100 dark:bg-zinc-800 p-3 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:cursor-pointer rounded-lg"
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h1 className="font-bold uppercase dark:text-white">{task.title}</h1>
      <p className="text-slate-500 dark:text-slate-400">{task.description}</p>
      <hr></hr>
    </div>
  );
}
