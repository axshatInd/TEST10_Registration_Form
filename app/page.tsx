import StudentRegistrationForm from "@/components/StudentRegistrationForm";

export default function Home() {
  return (
    <main className="container mx-auto p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Student Registration
      </h1>
      <StudentRegistrationForm />
    </main>
  );
}
