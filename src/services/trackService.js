const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

async function index() {
  try {
    // make a GET request to localhost:300/tracks - calling api
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function create(formData) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function deleteTrack(selectedTrackId) {
  try {
    const response = await fetch(BASE_URL + `/${selectedTrackId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function updateTrack(selectedTrackId, formData) {
  try {
    const response = await fetch(BASE_URL + `/${selectedTrackId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export { index, create, deleteTrack, updateTrack };
