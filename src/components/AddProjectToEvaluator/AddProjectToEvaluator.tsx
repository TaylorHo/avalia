import type { Evaluator } from "@/lib/models/evaluator";
import type { ProjectForEvaluator } from "@/lib/models/project";
import { useState } from "react";
import Select from "react-tailwindcss-select";
import type { SelectValue } from "react-tailwindcss-select/dist/components/type";
import DialogComponent from "../Dialog/Dialog";

export default function AddProjectToEvaluator({ evaluator }: { evaluator: Evaluator }) {
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);
  const [projects, setProjects] = useState<ProjectForEvaluator[]>([]);
  const [selectedEvaluators, setSelectedEvaluators] = useState<SelectValue>([]);

  const getProjects = async (): Promise<ProjectForEvaluator[]> => {
    const projectsGetted = localStorage.getItem("projectsList");

    if (projectsGetted) {
      return JSON.parse(projectsGetted);
    }

    return await fetch("/api/admin/projects/")
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };

  const openDialog = async (): Promise<void> => {
    // Abre primeiro o modal e depois carrega os projetos, para que seja mostrado primeiramente um loader e, após, trocado o estado
    setDialogIsOpen(true);
    const projectsGetted = await getProjects();
    setProjects(projectsGetted);
  };

  return (
    <>
      <span
        onClick={openDialog}
        className="py-1 px-2 ml-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer transition-all font-light text-gray-700"
      >
        +
      </span>
      <DialogComponent
        open={dialogIsOpen}
        setOpen={setDialogIsOpen}
        title={`Selecione os projetos para ${evaluator.name.split(" ")[0]}`}
        buttonText="Salvar"
      >
        <div style={{ height: "calc(100vh * 0.5)" }}>
          <p className="py-1">Selecione a baixo:</p>
          <Select
            primaryColor="blue"
            value={selectedEvaluators}
            onChange={(val) => setSelectedEvaluators(val)}
            options={projects.map((project) => {
              return {
                value: project.id.toUpperCase(),
                label: `${project.title.substring(0, 30)}${project.title.length > 30 ? "..." : ""} (${project.id.toUpperCase()})`,
              };
            })}
            isMultiple={true}
            isSearchable={true}
            placeholder="Selecione..."
            searchInputPlaceholder="Buscar projetos"
            noOptionsMessage="Nenhum projeto encontrado."
          />
        </div>
      </DialogComponent>
    </>
  );
}