import React from "react";

import "./StudentsListOfGroup.css";

import { useParams } from "react-router-dom";

import useStudentsGroupList from "../../hooks/useStudentsGroupList";

import { StudentsContext } from "../../contexts/StudentsContext/StudentsContext";

import StudentsListOptionsPanel from "../../components/StudentsListOptionsPanel/StudentsListOptionsPanel";
import Modal from "../../components/Modal/Modal";
import StudentListItem from "../../components/StudentListItem/StudentListItem";
import StudentsListOfGroupModal from "../../layouts/StudentsListOfGroupModal/StudentsListOfGroupModal";

export default function StudentsListOfGroup() {
  const { id } = useParams();
  const [studentsGroupList, groupData] = useStudentsGroupList(id);

  const [showModal, setShowModal] = React.useState(false);
  const { studentsState } = React.useContext(StudentsContext);

  return (
    <section className="students-list-of-group">
      <h2>
        Lista studentów i przypisanie studenta do listy przy uzyciu okna modala
      </h2>
      <div className="students-list-of-group-wrapper">
        <StudentsListOptionsPanel
          groupIndex={groupData.groupIndex}
          openModal={() => setShowModal(true)}
        />
        <article className="students-list">
          <h4>Lista studentów</h4>
          <ul className="list-of-students">
            {studentsGroupList !== undefined && studentsGroupList.length > 0 ? (
              <>
                {studentsGroupList.map(({ id, name, surname, indexNumber }) => (
                  <StudentListItem
                    key={`${id}-${name}`}
                    name={name}
                    surname={surname}
                    indexNumber={indexNumber}
                  />
                ))}
              </>
            ) : (
              <li>Brak Studentów</li>
            )}
          </ul>
        </article>

        {showModal && (
          <Modal closeModal={() => setShowModal(false)}>
            <StudentsListOfGroupModal
              closeModal={() => setShowModal(false)}
              stacionary={studentsState.stacionary}
              nonstacionary={studentsState.nonstacionary}
            />
          </Modal>
        )}
      </div>
    </section>
  );
}
