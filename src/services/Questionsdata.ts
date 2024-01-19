
export async function getQuizData() {
  try {
    const res = await fetch("/data.json");
    if (!res.ok) throw new Error("Failed in getting quiz");

    const data = await res.json();
    return data?.quizzes;

    
  } catch (error: any) {
    console.error((error as Error).message);
    throw error; // Re-throw the error to propagate it further if needed
  }
}