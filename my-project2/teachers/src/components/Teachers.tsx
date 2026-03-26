import { useEffect, useState } from "react";
import { collection, getDocs, QuerySnapshot, type DocumentData } from "firebase/firestore";
import { db } from "../utils/fierbase";
import { addTeachersToFirebase } from "../utils/addTeachers";
import "./Teachers.css";

interface Teacher {
  id: string;
  name: string;
  email?: string;
  subject?: string;
  [key: string]: any;
}

export default function Teachers() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const fetchTeachers = async () => {
    try {
      setLoading(true);
      const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
        collection(db, "teachers")
      );

      const teachersData: Teacher[] = [];
      querySnapshot.forEach((doc) => {
        teachersData.push({
          id: doc.id,
          ...doc.data(),
        } as Teacher);
      });

      setTeachers(teachersData);
      setError(null);
    } catch (err) {
      console.error("Error fetching teachers:", err);
      let errorMessage = "Failed to load teachers. Please try again later.";

      if (err instanceof Error) {
        if (err.message.includes("permission-denied")) {
          errorMessage = "Access denied. Please check Firebase security rules.";
        } else if (err.message.includes("unavailable")) {
          errorMessage = "Firebase service is temporarily unavailable.";
        } else if (err.message.includes("not-found")) {
          errorMessage = "Firebase project not found. Please check your configuration.";
        } else {
          errorMessage = `Error: ${err.message}`;
        }
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTeachers = async () => {
    try {
      setIsAdding(true);
      await addTeachersToFirebase();
      await fetchTeachers();
    } catch (err) {
      setError("Failed to add teachers. Please try again.");
    } finally {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  if (loading) {
    return <div className="teachers-container">Loading teachers...</div>;
  }

  if (error) {
    return <div className="teachers-container error">{error}</div>;
  }

  if (teachers.length === 0) {
    return (
      <div className="teachers-container">
        <h1>Teachers</h1>
        <p style={{ textAlign: "center", marginBottom: "20px" }}>
          No teachers found in the database.
        </p>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleAddTeachers}
            disabled={isAdding}
            className="btn-add-teachers"
          >
            {isAdding ? "Adding Teachers..." : "Add Sample Teachers"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="teachers-container">
      <div className="header">
        <h1>Teachers</h1>
        <button onClick={() => fetchTeachers()} className="btn-refresh">
          Refresh
        </button>
      </div>
      <div className="teachers-grid">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="teacher-card">
            <h2>{teacher.name}</h2>
            {teacher.email && <p><strong>Email:</strong> {teacher.email}</p>}
            {teacher.subject && <p><strong>Subject:</strong> {teacher.subject}</p>}
            {teacher.phone && <p><strong>Phone:</strong> {teacher.phone}</p>}
            {teacher.department && <p><strong>Department:</strong> {teacher.department}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
