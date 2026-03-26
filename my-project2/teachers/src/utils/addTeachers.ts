import { collection, addDoc } from "firebase/firestore";
import { db } from "./fierbase";

export interface TeacherData {
  name: string;
  email?: string;
  subject?: string;
  phone?: string;
  department?: string;
  yearsExperience?: number;
}

const sampleTeachers: TeacherData[] = [
  {
    name: "John Smith",
    email: "john.smith@school.com",
    subject: "Mathematics",
    phone: "555-0101",
    department: "Science & Math",
    yearsExperience: 15,
  },
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@school.com",
    subject: "English Literature",
    phone: "555-0102",
    department: "Language Arts",
    yearsExperience: 12,
  },
  {
    name: "Michael Chen",
    email: "michael.chen@school.com",
    subject: "Physics",
    phone: "555-0103",
    department: "Science & Math",
    yearsExperience: 10,
  },
  {
    name: "Emily Rodriguez",
    email: "emily.rodriguez@school.com",
    subject: "History",
    phone: "555-0104",
    department: "Social Studies",
    yearsExperience: 8,
  },
  {
    name: "David Thompson",
    email: "david.thompson@school.com",
    subject: "Chemistry",
    phone: "555-0105",
    department: "Science & Math",
    yearsExperience: 20,
  },
];

export async function addTeachersToFirebase() {
  try {
    const teachersCollection = collection(db, "teachers");
    const addedTeachers = [];

    for (const teacher of sampleTeachers) {
      const docRef = await addDoc(teachersCollection, teacher);
      addedTeachers.push({ id: docRef.id, ...teacher });
      console.log(`Teacher added: ${teacher.name} (ID: ${docRef.id})`);
    }

    console.log(`Successfully added ${addedTeachers.length} teachers to Firebase`);
    return addedTeachers;
  } catch (error) {
    console.error("Error adding teachers to Firebase:", error);

    if (error instanceof Error) {
      if (error.message.includes("permission-denied")) {
        throw new Error("Access denied. Please check Firebase security rules. You may need to allow unauthenticated access for testing.");
      } else if (error.message.includes("unavailable")) {
        throw new Error("Firebase service is temporarily unavailable.");
      } else {
        throw new Error(`Failed to add teachers: ${error.message}`);
      }
    }

    throw error;
  }
}
