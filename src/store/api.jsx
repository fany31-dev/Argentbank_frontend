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
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data.body.token; //on renvoie le token//
  } catch (error) {
    console.error("Erreur API login :", error.message);
    return null;
  }
}

//********************************************************//
//********************************************************//

//PROFILE
export async function fetchUserProfile(token) {
  const userProfileUrl = "http://localhost:3001/api/v1/user/profile";

  try {
    const response = await fetch(userProfileUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // verification de la reponse //
    if (!response.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data.body; // email, firstName, lastName, userName
  } catch (error) {
    console.error("Erreur API login :", error.message);
    return null;
  }
}
