import { IJobTitle } from "../../../../interfaces/jobTitle";
import { Table } from "../../styles";
import { Button } from "../../../Button/styles";
import { useAppSelector } from "../../../../store/hook";
import JobTitleCreate from "../../../Modal/components/JobTitles/JobTitleCreate";
import JobTitleUpdate from "../../../Modal/components/JobTitles/JobTitleUpdate";
import { JobTitleDelete } from "../../../Modal/components/JobTitles/JobTitleDelete";
import { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export const JobTitlesTab = () => {
  const jobTitles = useAppSelector((state) => state.jobTitles);

  const [createJobTitleModal, setCreateJobTitleModal] = useState(false);
  const [updateJobTitleModal, setUpdateJobTitleModal] = useState(false);
  const [deleteJobTitleModal, setDeleteJobTitleModal] = useState(false);
  const [jobTitle, setJobTitle] = useState<IJobTitle>({
    department: "",
    designation: "",
    id: "",
  });
  const [jobTitleId, setJobTitleId] = useState("");

  const jobTitleUpdate = (jobTitle: IJobTitle) => {
    setJobTitle(jobTitle);
    setUpdateJobTitleModal(true);
  };

  const jobTitleDelete = (id: string) => {
    setJobTitleId(id);
    setDeleteJobTitleModal(true);
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Department</th>
            <th>Designation</th>
            <th>
              <Button width={120} onClick={() => setCreateJobTitleModal(true)}>
                +Add
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {jobTitles.jobTitles.map((jobTitle: IJobTitle) => (
            <tr key={jobTitle.id}>
              <td>{jobTitle.department}</td>
              <td>{jobTitle.designation}</td>
              <td>
                <Button onClick={() => jobTitleUpdate(jobTitle)}>
                  <AiOutlineEdit size={20}>Update</AiOutlineEdit>
                </Button>{" "}
                <Button onClick={() => jobTitleDelete(jobTitle.id)}>
                  <AiOutlineDelete size={20}>Delete</AiOutlineDelete>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {createJobTitleModal && (
        <JobTitleCreate onClose={() => setCreateJobTitleModal(false)} />
      )}
      {updateJobTitleModal && (
        <JobTitleUpdate
          jobTitle={jobTitle}
          onClose={() => setUpdateJobTitleModal(false)}
        />
      )}
      {deleteJobTitleModal && (
        <JobTitleDelete
          id={jobTitleId}
          onClose={() => setDeleteJobTitleModal(false)}
        />
      )}
    </>
  );
};
