import React from "react";

import "./GroupsDoingTheSubject.css";

import { useParams } from "react-router-dom";

import mock_subjects from "../../mocks/mock_subjects.json";

import SubjectGroupsList from "../../components/SubjectGroupsList/SubjectGroupsList";

export default function StudentsDoingTheSubject() {
  let { subject } = useParams();

  const subjectHeader = subject.toUpperCase().replace(/-/g, " ");

  const subjectGroups = mock_subjects.subjects.filter(
    ({ subjectName }) => subjectName === subjectHeader
  );

  const stationarySubjectGroups = subjectGroups[0].groups.stationary;
  const nostationarySubjectGroups = subjectGroups[0].groups.nostationary;

  return (
    <section className="subjects-groups">
      <h2>{subjectHeader}</h2>
      <article className="groups-assigned-the-subject">
        <h3>Grupy realizujące przedmiot</h3>
        <SubjectGroupsList
          label="Grupy Stacjonarne"
          subjectGroups={stationarySubjectGroups}
        />
        <SubjectGroupsList
          label="Grupy Niestacjonarne"
          subjectGroups={nostationarySubjectGroups}
        />
      </article>
    </section>
  );
}
