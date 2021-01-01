import { Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { Project } from "../../types";
import { connectToDatabase } from "../../utils/mongodb";

/**
 * Inserts a project into Projects collection
 *
 * @param project Project
 * @returns project Project
 */
const addProjectToDatabase = async (project: Project) => {
  const conn = await connectToDatabase();
  const db: Db = conn.db();
  delete project.id;
  const newProject = await db.collection("Projects").insertOne({ ...project });
  return newProject;
};

/**
 * Queries all projects from the "Projects" collection
 * and returns them as an array of Project
 *
 * @returns projects Project[]
 */
export const getAllProjects = async () => {
  const conn = await connectToDatabase();
  const db: Db = conn.db();

  const projectsFromDb = await db.collection("Projects").find({}).toArray();
  const projects = JSON.parse(JSON.stringify(projectsFromDb));
  return projects;
};

/**
 * Checks whether given object is of type Project
 * @param obj any
 */
const isProject = (obj: any): obj is Project => {
  console.log(obj);
  return obj.title != undefined;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      try {
        const projects = await getAllProjects();
        res.json(projects);
      } catch (error) {
        res.status(501).json(error);
      }
      break;
    }
    case "POST": {
      const { body } = req;
      if (isProject(body)) {
        try {
          const newProject = await addProjectToDatabase(body as Project);
          res.json({ project: newProject.ops });
        } catch (error) {
          res.status(401).json({ error });
        }
      } else {
        res.status(401).json({ error: "Malformed request", data: body });
      }
      break;
    }
  }
};
