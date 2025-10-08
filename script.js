document.getElementById("downloadBtn").addEventListener("click", async () => {
    const url = document.getElementById("url").value;
    if (!url) return alert("Please enter a URL");

    try {
        const response = await fetch("https://YOUR_BACKEND_URL/download", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url })
        });

        if (!response.ok) {
            const error = await response.json();
            return alert("Error: " + error.error);
        }

        const blob = await response.blob();
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "video.mp4"; // или вземи от yt-dlp името
        a.click();
    } catch (err) {
        alert("Request failed: " + err);
    }
});
