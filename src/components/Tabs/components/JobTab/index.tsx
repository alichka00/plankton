import { I_Job } from "interfaces/job";
import * as S from "components/Tabs/styles";
import { Button } from "styles/Button/styles";
import { useAppSelector } from "store/hook";
import { JobCreate } from "components/Modal/components/Jobs/JobCreate";
import { JobUpdate } from "components/Modal/components/Jobs/JobUpdate";
import { JobDelete } from "components/Modal/components/Jobs/JobDelete";
import { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export const JobsTab = () => {
  const jobs = useAppSelector((state) => state.jobs);

  const [createJobModal, setCreateJobModal] = useState(false);
  const [updateJobModal, setUpdateJobModal] = useState(false);
  const [deleteJobModal, setDeleteJobModal] = useState(false);
  const [job, setJob] = useState<I_Job>({
    department: "",
    designation: "",
    id: "",
  });

  const [jobId, setJobId] = useState("");

  const handleOpenCreateJobModal = () => {
    setCreateJobModal(true);
  };

  const handleCloseCreateJobModal = () => {
    setCreateJobModal(false);
  };

  const handleOpenUpdateJobModal = (job: I_Job) => {
    setJob(job);
    setUpdateJobModal(true);
  };

  const handleCloseUpdateJobModal = () => {
    setUpdateJobModal(false);
  };

  const handleOpenDeleteJobModal = (id: string) => {
    setJobId(id);
    setDeleteJobModal(true);
  };

  const handleCloseDeleteJobModal = () => {
    setDeleteJobModal(false);
  };

  return (
    <>
      <S.Table>
        <thead>
          <tr>
            <th>Department</th>
            <th>Designation</th>
            <th>
              <Button width={120} onClick={handleOpenCreateJobModal}>
                +Add
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs.jobs.map((job: I_Job) => (
            <tr key={job.id}>
              <td>{job.department}</td>
              <td>{job.designation}</td>
              <td>
                <Button onClick={() => handleOpenUpdateJobModal(job)}>
                  <AiOutlineEdit size={20}>Update</AiOutlineEdit>
                </Button>{" "}
                <Button onClick={() => handleOpenDeleteJobModal(job.id)}>
                  <AiOutlineDelete size={20}>Delete</AiOutlineDelete>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
      {createJobModal && <JobCreate onClose={handleCloseCreateJobModal} />}
      {updateJobModal && (
        <JobUpdate job={job} onClose={handleCloseUpdateJobModal} />
      )}
      {deleteJobModal && (
        <JobDelete id={jobId} onClose={handleCloseDeleteJobModal} />
      )}
    </>
  );
};
