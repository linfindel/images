const username = 'Nadir-Software';
const repo = 'images';

fetch(`https://api.github.com/repos/${username}/${repo}/commits?per_page=1`)
  .then(response => {
    const totalCount = response.headers.get('Link').match(/page=(\d+)>; rel="last"/)[1];
    return response.json().then(data => {
        const latestCommitMessage = data[0].commit.message;
        console.log(`Total commit count: ${totalCount}`);
        console.log(`Latest commit message: ${latestCommitMessage}`);
        
        document.getElementById("version").innerText = `Version ${totalCount} Release Notes`;
        document.getElementById("whats-new").innerText = latestCommitMessage;
    });
})
.catch(error => console.error('Error fetching data:', error));