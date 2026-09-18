// LOGIN
export async function fetchLoginUser(email, password) {
  const loginUserUrl = "http://localhost:3001/api/v1/user/login";

  try {
    const response = await fetch(loginUserUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // verification de la reponse //
    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    const data = await response.json();
    console.log(data.body.token);
    return data.body.token; //on renvoie le token//
  } catch (error) {
    console.error("Erreur API login :", error.message);
    return null;
  }
}
