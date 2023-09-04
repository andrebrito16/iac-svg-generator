
export const fetchUserGrades = async (options: { token: string }) => {
  const response = await fetch("https://bigdata.insper-comp.com.br/iag/grade_by_exercice/megadados/23-2", {
    headers: {
      "Authorization": `Bearer ${options.token}`
    }
  })

  const data = await response.text();

  return data;
}