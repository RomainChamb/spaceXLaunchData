async function downloadLaunchData() {
    const response = await fetch("https://api.spacexdata.com/v4/launches", { method: "GET" });
    const launchData = await response.json()
    console.log(launchData);
}

await downloadLaunchData();

async function addUser() {
    const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify({
            name: "Elon Musk",
            job: "billionaire"
        }),
        headers: {"Content-Type": "application/json; charset=UTF-8"}
    });
    const userInfos = await response.json();
    console.log(userInfos);
}

await addUser();